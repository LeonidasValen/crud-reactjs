import { useState } from "react";
import Swal from "sweetalert2";

export function Created({employees, setEmployees,setIsAdding}){
    //creo estados para los inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        salary: '',
        date: ''
      });

      //trae los datos del input haciendo la funcion de traer los datos del estado anterior para luego ser cambiado por el nuevo
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

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
        const newEmployee = {...formData};

        setIsAdding(false);//cierra el modal
        setEmployees([...employees, newEmployee]);//actualiza el arrays del employees
        localStorage.setItem('employees_data', JSON.stringify(newEmployee));//actualiza la cache del employee

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${formData.firstName} ${formData.lastName}'s data has been added.`,
            timer: 1500,
            showConfirmButton: false
        });
    }

    return(
        <section className="modal-edit">
            <div className="bg-modal" onClick={() => setIsAdding(false)}></div>
            <div className="modal-container">

                <form onSubmit={handleUpdate}>
                    <h1>Add employee</h1>
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
                            Create
                        </button>
                        <button onClick={() => setIsAdding(false)}>
                            Cancel
                        </button>
                    </div>
                </form>

            </div>
        </section>
    )
}