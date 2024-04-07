import { useState, useEffect } from "react"
import { Login } from "./components/login/login"
import { Dasboard } from "./components/dasboard";

function App() {
  //estado para mantener la autentificacion
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //funcion para el manejo de inico de sesion
  useEffect(()=>{
    const storedToken = localStorage.getItem('session_token')//guarda el inicio de sesion
    if(storedToken){
      setIsAuthenticated(true)
    }
  },[])

  console.log(isAuthenticated)
  return (
    <>
    {isAuthenticated ?(
      <Dasboard setIsAuthenticated={setIsAuthenticated}/>
    ):(
      <Login setIsAuthenticated={setIsAuthenticated}/>
    )}
    </>
  )
}
export default App

// import PaginationExample from "./test/paginatio";
// function App() {

//   return (
//     <>
//       <PaginationExample></PaginationExample>
//     </>
//   )
// }

// export default App
