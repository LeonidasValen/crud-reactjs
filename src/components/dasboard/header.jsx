import { Logout } from "../logout/logout";
import { Search } from "../navigation/search";

export function Header({ setIsAuthenticated, setIsAdding, setSearch }){
    return(
        <header className="header-content">
            <Search setSearch={setSearch}/>
            <div className="btn-header">
                <button className="btn-addemployee" onClick={()=>setIsAdding(true)}>Add employee</button>
                <Logout setIsAuthenticated={setIsAuthenticated}/>
            </div>
        </header>
    )
}