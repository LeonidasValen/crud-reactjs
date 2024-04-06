import { useState } from "react"
import Swal from 'sweetalert2'

import './login.css'

export function Login({ setIsAuthenticated }){
    //datos que estan por defecto
    const adminEmail = 'admin@example.com'
    const adminPass = '1234'

    //estados del email y contraseña
    const[email, setEmail] = useState(adminEmail)
    const [password, setPassword] = useState(adminPass);

    //envio del formulario
    const handleLogin = e =>{
        e.preventDefault();

        if(email===adminEmail && password===adminPass){
            Swal.fire({
                 timer: 1200,
                icon: "success",
                title: "Success.",
                text: "Successfully logged in!",
                showConfirmButton: false,
              }).then(()=>{
                localStorage.setItem('session_token', true);
                setIsAuthenticated(true);
              });
        }else{
            Swal.fire({
                // timer: 1500,
                icon: "error",
                title: "Oops...",
                text: "Incorrect email or password!",
                showConfirmButton: true,
              });
        }

    }

    return(
        <div className="login-content">
            <form onSubmit={handleLogin} className="login-form">
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    placeholder='admin@example.com'
                    value={email} 
                    onChange={e=>setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    placeholder='1234'
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
}