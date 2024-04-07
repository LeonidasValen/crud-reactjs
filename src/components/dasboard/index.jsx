import { useState } from "react";
import Swal from "sweetalert2";

import { Created } from "../modificated/create";
import { Pagination } from "./pagination";
import { Header } from "./header";
import { Table } from "../table/table";
import { Edit } from "../modificated/update";

import './dasboard.css'

import { employeesData } from "../../data/data";


export function Dasboard({ setIsAuthenticated }){

    //estado del modal agregar nuevo empleado
    const [isAdding, setIsAdding] = useState(false);

    //estado y funcion que cuando carga la pagina se ejecuta 
    const [employees, setEmployees] = useState(() => {
        //guarda los datos
        const data = JSON.parse(localStorage.getItem('employees_data'));
        //obtiene los datos obtenidos de data pero si no usa lo de employeesData 
        return data || employeesData;
    });
    
    const [isEditing, setIsEditing] = useState(false);
    //guarda los datos del empleado para luego su edicion
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    
    //funcion para editar
    const handleEdit = id =>{
        //filtra por el id
        const [employee] = employees.filter(employee => employee.id === id)

        setSelectedEmployee(employee);
        setIsEditing(true)
    }

    //funcion para borrar el empleado
    const handleDelete = id => {
        //mensaje de advertencia
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                //busca el id que coincida con el empleado si no lo encuentra dara valor -1
                const indexToDelete = employees.findIndex(employee => employee.id === id);
                //si es diferente a -1 hara la eliminacion
                if (indexToDelete !== -1) {
                    //obtiene los datos del empleado seleccionado
                    const deletedEmployee = employees[indexToDelete];
                    // filtra y elimina al empleado de la lista
                    const filteredEmployees = employees.filter(employee => employee.id !== id);
    
                    // actualizar el id de los empleados que estan despues de eliminar un empleado
                    for (let i = indexToDelete; i < filteredEmployees.length; i++) {
                        filteredEmployees[i].id = i + 1;
                    }
    
                    // actualiza el estado de los empleados y los datos en el almacenamiento local
                    setEmployees(filteredEmployees);
                    localStorage.setItem('employees_data', JSON.stringify(filteredEmployees));
    
                    // mensaje de exito
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: `${deletedEmployee.firstName} ${deletedEmployee.lastName} data has been deleted.`,
                        showConfirmButton: false,
                        timer: 1200,
                    });
                }
            }
        });
    }
    

        //Paginacion
    const itemsPerPage = 10;//cantidad de items a mostrar
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(employees.length / itemsPerPage);//calcula de total de paginas que va haber
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = employees.slice(startIndex, endIndex);//cantidad de empleados a mostras que son 10
        // console.log(currentItems)

    const handlePageChange = (newPage) => {
        setCurrentPage(Math.max(1, Math.min(newPage, totalPages)));
    };

    return(
        <div className="dasboard-content">
            <h1 className="titulo">Employers table</h1>

            <section className="table-employee">
                <Header setIsAuthenticated={setIsAuthenticated} setIsAdding={setIsAdding}/>
                <Table employees={currentItems} handleEdit={handleEdit}  handleDelete={handleDelete} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
            </section>

            {isAdding && (
                <Created
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}