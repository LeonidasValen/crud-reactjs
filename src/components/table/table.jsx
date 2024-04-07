import './table.css'

export function Table({employees, handleEdit, handleDelete}){

    //re ajusta el numero de id
    // employees.forEach((employee, i) => {
    //     employee.id = i + 1;
    // });

    //ajusta la moneda local en este caso es el argentino
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
      });
      

    return(
        <div className="contain-table">
            <table>
                <thead>
                    <tr>
                        <th>Id 
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-down-up">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M17 3l0 18" /><path d="M10 18l-3 3l-3 -3" />
                                <path d="M7 21l0 -18" />
                                <path d="M20 6l-3 -3l-3 3" />
                            </svg>
                        </th>
                        <th>Name
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-down-up">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M17 3l0 18" /><path d="M10 18l-3 3l-3 -3" />
                                <path d="M7 21l0 -18" />
                                <path d="M20 6l-3 -3l-3 3" />
                            </svg>
                        </th>
                        <th>Last name
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-down-up">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M17 3l0 18" /><path d="M10 18l-3 3l-3 -3" />
                                <path d="M7 21l0 -18" />
                                <path d="M20 6l-3 -3l-3 3" />
                            </svg>
                        </th>
                        <th>Email
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-down-up">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M17 3l0 18" /><path d="M10 18l-3 3l-3 -3" />
                                <path d="M7 21l0 -18" />
                                <path d="M20 6l-3 -3l-3 3" />
                            </svg>
                        </th>
                        <th>Salary
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-down-up">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M17 3l0 18" /><path d="M10 18l-3 3l-3 -3" />
                                <path d="M7 21l0 -18" />
                                <path d="M20 6l-3 -3l-3 3" />
                            </svg>
                        </th>
                        <th>Date
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-down-up">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M17 3l0 18" /><path d="M10 18l-3 3l-3 -3" />
                                <path d="M7 21l0 -18" />
                                <path d="M20 6l-3 -3l-3 3" />
                            </svg>
                        </th>
                        <th colSpan="2" className="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee)=>(
                            <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{formatter.format(employee.salary)}</td>
                            <td>{employee.date}</td>
                            <td className="action-trash">
                                <button onClick={() => handleDelete(employee.id)}>
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M4 7l16 0" />
                                        <path d="M10 11l0 6" />
                                        <path d="M14 11l0 6" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                </button>
                            </td>
                            <td className="action-edit">
                                <button onClick={()=>handleEdit(employee.id)}>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                    <path d="M13.5 6.5l4 4" />
                                </svg>
                                </button>
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                      </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}