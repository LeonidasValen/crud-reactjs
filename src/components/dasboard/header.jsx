import { Logout } from "../logout/logout";

export function Header({ setIsAuthenticated, setIsAdding }){
    return(
        <header className="header-content">
            <button className="btn-addemployee" onClick={()=>setIsAdding(true)}>Add employee</button>
            <Logout setIsAuthenticated={setIsAuthenticated}/>
        </header>
    )
}