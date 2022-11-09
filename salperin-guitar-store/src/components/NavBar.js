import React, {useState, useEffect} from "react";
import '../styles/navbar.css';
import logo from '../img/logo.png';
import SearchBar from "./Contenedores/ListConteiner/SearchBar";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from'@fortawesome/free-solid-svg-icons'; 

import { CartWidget } from "../elements/cartWidget";

import { db } from "../firebase/firebaseConfig";
import {getDocs, collection} from "firebase/firestore";



const NavBar = () => {

  const {user} = useAuth()
  
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
  
    setCategorias(listaCategorias)
    })
  }, []) 


   return (

       <header className="header">       
         
          <Link className="link-logo" to="/">
            <img src={logo} className="header-logo" alt="logo" />   
          </Link>    
         
         <nav>
           <ul>
          
             {categorias.map((categoria) => {
               return <li key={categoria.id}><Link to={categoria.ruta} className="link" >{categoria.nombre}</Link></li>
             })} 
           </ul> 
        </nav>
        
        
       
        
        <div className="contenedor-carrito">

           { user ? 
            <Link className="estilo-perfil-usuario" to='/perfil-usuario'>
            <h3 className="bienvenida-navbar">Hola {user.email}</h3>
            <h4>Ir a mi perfil</h4>
            </Link>
            :
            <></> 
           }
             
           <Link to='/acceso-usuario'><FontAwesomeIcon className="estilo-usuario" icon={faUser}/></Link>
           
           <CartWidget/>
        
        </div>

        
        <div className="contenedor-search-bar"> 
           <SearchBar></SearchBar>
        </div>
        
        
        <div className="vista-admin">
        <Link className="vista-admin-link" to="/vista-administrador"><h4 >VistaAdmin</h4></Link>
        </div>

           

       </header>

      

    );
}
 
export default NavBar;