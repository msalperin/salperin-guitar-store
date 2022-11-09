
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function RutaProtegida({children}) {
     
    const {user, loading} = useAuth()

    if(loading) return <h1>Cargando...</h1>
    if(!user) return <Navigate to="/"/>

    return<>{children}</>


}