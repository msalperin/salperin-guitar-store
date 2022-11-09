
import React from "react";
import '../styles/formulario.css'

import FormularioNuevoUsuario from "./FormularioNuevoUsuario";
import FormularioAccesoUsuario from "./FormularioAccesoUsuario";

const AccesoUsuarios = () => {
    return (
        <>

        <div className="contenedor-formularios">   
        <FormularioNuevoUsuario></FormularioNuevoUsuario>
        <FormularioAccesoUsuario></FormularioAccesoUsuario>
        </div>
        </>
      );
}
 
export default AccesoUsuarios;