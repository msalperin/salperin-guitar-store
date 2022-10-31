import React, {useState, useEffect} from "react";
import '../styles/navbar.css';
import logo from '../img/logo.png';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from'@fortawesome/free-solid-svg-icons'; 

import { CartWidget } from "../elements/cartWidget";

import { db } from "../firebase/firebaseConfig";
import {getDocs, collection} from "firebase/firestore";


const NavBar = ({nombreUsuario}) => {
  
  const [categorias, setCategorias] = useState([])
  
  useEffect(() => {
    
    const categoriasCollection = collection(db, 'categorias');
    
    getDocs(categoriasCollection)
    .then((result) => {
    const listaCategorias = result.docs.map(categoria =>{
      return {
        ...categoria.data(),
       /*  id: categoria.id */
      }
    })  
    console.log(listaCategorias)
    setCategorias(listaCategorias)
    })
  }, []) 

 /*   const categorias = [
      {nombreCategoria:"Guitarras", id: 1, ruta:"/listado-productos/guitarras"},
      {nombreCategoria:"Bajos", id: 2, ruta: "/listado-productos/bajos"},
      {nombreCategoria:"Sonido", id: 3, ruta: "/listado-productos/sonido"},
      {nombreCategoria:"Accesorios", id: 4, ruta: "/listado-productos/accesorios"},
   ] */

   return (

       <header className="header">       
         
          <Link className="link-logo" to="/">
            <img src={logo} className="header-logo" alt="logo" />   
          </Link>    
         
         <nav>
           <ul>
             {/* Lo pongo en lista porque va a ser menu desplegable */}
             {categorias.map((categoria) => {
               return <li key={categoria.id}><Link to={categoria.ruta} className="link" >{categoria.nombre}</Link></li>
             })} 
           </ul> 
        </nav>
        
   
        <div className="contenedor-carrito">
            {/*  Si el usuario logeado se muestra bienvenida sino usuario*/}
           <h2 className="bienvenida-usuario">Hola {nombreUsuario}</h2>  
           <><FontAwesomeIcon className="estilo-usuario" icon={faUser}/></>
           
           <CartWidget/>
        
        </div>

       </header>

    );
}
 
export default NavBar;