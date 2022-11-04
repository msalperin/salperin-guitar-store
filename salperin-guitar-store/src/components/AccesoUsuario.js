
import React from "react";

import FormularioNuevoUsuario from "./FormularioNuevoUsuario";
import FormularioAccesoUsuario from "./FormularioAccesoUsuario";

const AccesoUsuarios = () => {
    return (
        <>
        <h1> Acceso usuarios</h1>

        <FormularioNuevoUsuario></FormularioNuevoUsuario>
        <FormularioAccesoUsuario></FormularioAccesoUsuario>

        </>
      );
}
 
export default AccesoUsuarios;