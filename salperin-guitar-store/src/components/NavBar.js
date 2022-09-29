import React from "react";
import '../styles/navbar.css';
import logo from '../img/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faUser} from'@fortawesome/free-solid-svg-icons';

/* 
import { CartWidget } from "../elements/cartWidget";
import { UserWidget } from "../elements/userWidget"; */


const NavBar = ({nombreUsuario}) => {
   
   const categorias = [
      {nombreCategoria:"Guitarras", id: 1},
      {nombreCategoria:"Bajos", id: 2},
      {nombreCategoria:"Sonido", id: 3},
      {nombreCategoria:"Accesorios", id: 4},
   ]

   return (

       <header className="header">       

         <img src={logo} className="header-logo" alt="logo" />   

         <nav>
           <ul>
             {/* Lo pongo en lista porque va a ser menu desplegable */}
             {categorias.map((categoria) => {
               return <li key={categoria.id}><a href="#" >{categoria.nombreCategoria}</a></li>
             })} 
           </ul> 
        </nav>
        
   
        <div className="contenedor-carrito">
            {/*  Si el usuario logeado se muestra bienvenida sino usuario*/}
           <h2 className="bienvenida-usuario">Hola {nombreUsuario}</h2>  
           <><FontAwesomeIcon className="estilo-usuario" icon={faUser}/></>
           <><FontAwesomeIcon className="estilo-carrito" icon={faCartShopping}/></> 
        </div>

       </header>

    );
}
 
export default NavBar;