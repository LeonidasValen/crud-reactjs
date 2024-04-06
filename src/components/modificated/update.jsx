import { useState } from "react";
import Swal from "sweetalert2";

export function Edit({employees,selectedEmployee, setEmployees,setIsEditing}){
    //estado que trae los datos del employee en base el id de selectedEmployee  puedan ser modificados
    const [formData, setFormData] = useState({
        firstName: selectedEmployee.firstName,
        lastName: selectedEmployee.lastName,
        email: selectedEmployee.email,
        salary: selectedEmployee.salary,
        date: selectedEmployee.date
    });


    //trae los datos del input haciendo la funcion de traer los datos del estado anterior para luego ser cambiado por el nuevo
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleUpdate = e =>{
        e.preventDefault();
        //guarda todos los datos de los inputs
        const { firstName, lastName, email, salary, date } = formData;
        //verifica que los datos esten completos
        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                timer: 3000,
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true,
            });
        }

        // actualizar datos del empleado
        const updatedEmployees = employees.map(employee => {
            //verifica el cual id coincide
            if (employee.id === selectedEmployee.id) {
              return {
                  ...employee,
                  ...formData
              };
            }
            return employee;
        });

        setIsEditing(false);//cierra el modal
        setEmployees(updatedEmployees);//actualiza el estado del employee
        localStorage.setItem('employees_data', JSON.stringify(updatedEmployees));//actualiza la cache del employee

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${formData.firstName} ${formData.lastName}'s data has been updated.`,
            timer: 1500,
            showConfirmButton: false
        });
    }

    return(
        <section className="modal-edit">
            <div className="bg-modal" onClick={() => setIsEditing(false)}></div>
            <div className="modal-container">
                <form onSubmit={handleUpdate}>
                    <h1>Edit employee</h1>

                    <label htmlFor="firtname">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        autoComplete="off"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="lastname">Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        autoComplete="off"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="text"
                        name="salary"
                        autoComplete="off"
                        value={formData.salary}
                        onChange={handleChange}
                    />
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        autoComplete="off"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <div className="btn-edit">
                        <button type="submit">
                            Update
                        </button>
                        <button onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
} 