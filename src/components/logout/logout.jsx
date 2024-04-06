import Swal from 'sweetalert2';

export function Logout({ setIsAuthenticated }){

    const handleLogout = ()=>{
        Swal.fire({
            title: "Logging out",
            text: "Are you sure you want to log out?",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Logout"
        }).then((result)=>{
            if (result.isConfirmed){
                localStorage.removeItem('session_token');
                setIsAuthenticated(false);
            }
        })
    }

    return(
        <button onClick={handleLogout} className='btn-logout'>
            Logout
        </button>
    )
}