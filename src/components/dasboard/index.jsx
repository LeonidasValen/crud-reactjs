import { useState } from "react";
import Swal from "sweetalert2";

import { Header } from "./header";
import { Table } from "./table";
import { Edit } from "../modificated/update";

import './dasboard.css'

import { employeesData } from "../../data/data";
import { Created } from "../modificated/create";

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
    const handleDelete = id =>{
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result =>{
            if(result.value) {
                // filtrar los empleados excluyendo al empleado que coincide con el id
                const [employee] = employees.filter(employee => employee.id === id)
                Swal.fire({
                  icon: 'success',
                  title: 'Deleted!',
                  text: `${employee.firstName} ${employee.lastName} is data has been deleted.`,
                  showConfirmButton: false,
                  timer: 1200,
                });

                const employeesCopy = employees.filter(employee => employee.id !== id);
                localStorage.setItem('employees_data', JSON.stringify(employeesCopy));
                setEmployees(employeesCopy);
            }
        })

    }

    return(
        <div className="dasboard-content">
            <h1 className="titlo">Employers table</h1>
            <Header setIsAuthenticated={setIsAuthenticated} setIsAdding={setIsAdding}/>
            <Table employees={employees} handleEdit={handleEdit}  handleDelete={handleDelete}/>

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