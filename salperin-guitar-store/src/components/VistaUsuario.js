import React, {useNavigate} from "react";
import { Navigate } from "react-router-dom";


import { useAuth } from "../context/AuthContext";

const VistaUsuario = () => {
    
    
    const {logout, user, loading} = useAuth();

    const handleLogout = async() => {
        await logout();
    }

    if(loading) return <h1>Cargando...</h1>

    return ( 
        <>
        <h1>Vista usuario:</h1>
        <h2>Hola {user.email}</h2> 
        <button onClick={handleLogout}>Log out</button>
        </>
     );
}
 
export default VistaUsuario;