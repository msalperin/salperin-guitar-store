
import React, {useState} from "react";
import formulario from '../styles/formulario.css';
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc} from "firebase/firestore";

import {auth} from '../firebase/firebaseConfig';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword} from "firebase/auth";

const FormularioNuevoUsuario = () => {

    
    const navigate = useNavigate(); 
    const[correo, establecerCorreo] = useState('');
    const[password, establecerPassword] =useState('');
    const[password2, establecerPassword2] =useState('');
    const[nombre, establecerNombre] =useState('');
    const[apellido, establecerApellido] = useState('');
    const[estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const[alerta, cambiarAlerta] = useState({});
    
    const listaUsuario = collection(db,"usuarios");

    const handleChange = (e) => { 
        switch(e.target.name){
            case 'email' :
                establecerCorreo(e.target.value);
                break;
            case 'nombre' :
                establecerNombre(e.target.value);
                break;
            case 'apellido' :
                establecerApellido(e.target.value);
                break;
            case 'password' :
                establecerPassword(e.target.value);
                break;
            case 'password2' :
                establecerPassword2(e.target.value);
                break;    
            default:
                break;
            }    
    }

    const handleSubmit = async(e) => {
        e.preventDefault(); 

        cambiarEstadoAlerta(false);
        cambiarAlerta({}); 
        
          // Comprobamos del lado del cliente que el correo sea valido.
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
          
        if( !expresionRegular.test(correo) ){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
               tipo: 'error',
               mensaje:'Ingrese mail valido'
            })
            return;
        }    
          
        
        if(correo === '' || password === '' || password2 === '' || nombre === '' || apellido ===''){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
               tipo: 'error',
               mensaje:'Los campos deben estar completos'
            })
             return;
        }
              
        if(password !== password2){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
               tipo: 'error',
               mensaje:'Los passwords deben coincidir'
            })
              return;
        }



        try {
           
			await createUserWithEmailAndPassword(auth, correo, password, nombre, apellido);
         navigate('/');
         
         }catch(error) {
         
         cambiarEstadoAlerta(true);

         let mensaje;
         switch(error.code){
				case 'auth/invalid-password':
					mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
					break;
				case 'auth/email-already-in-use':
					mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
				break;
				case 'auth/invalid-email':
					mensaje = 'El correo electrónico no es válido.'
				break;
				default:
					mensaje = 'Hubo un error al intentar crear la cuenta.'
				break;
		 }
         
         cambiarAlerta({tipo: 'error', mensaje: mensaje})  
       
        }

        addDoc(listaUsuario,{
            nombre: nombre,
            apellido: apellido,
            email: correo,
            wishlist: [],
          })

        alert('Usuario creado con exito')
        
    };
              
    

    return (
        <div className="contenedor-formulario" >
        
        <h1 className="titulo-formulario">Crear Cuenta</h1>

        {estadoAlerta ? 
           <h1>{alerta.tipo} {alerta.mensaje}</h1>
        :
           <></>    
         
        }


        <form onSubmit={handleSubmit}>
        <label for="nombre">Ingrese su Nombre:</label>   
           <input 
               type="nombre"
               name="nombre"
               placeholder="Ingrese Nombre"
               value={nombre}
               onChange={handleChange}
               >
            </input>
        <label for="apellido">Ingrese su Apellido:</label>    
            <input 
               type="apellido"
               name="apellido"
               placeholder="Ingrese Apellido"
               value={apellido}
               onChange={handleChange}
               >
            </input>
        <label for="email">Ingrese su email:</label>    
            <input 
               type="email"
               name="email"
               placeholder="Correo Electronico"
               value={correo}
               onChange={handleChange}
               >
            </input>
        <label for="password">Ingrese su password:</label>    
            <input 
               type="password"
               name="password"
               placeholder="Contraseña"
               value={password}
               onChange={handleChange}
               >
            </input>
        <label for="nombre">Reingrese su password:</label>    
            <input 
               type="password"
               name="password2"
               placeholder="RepetirContraseña"
               value={password2}
               onChange={handleChange}
               >
            </input>
            <button className="botones">Crear cuenta</button>
        </form>




        </div>
      );
}
 
export default FormularioNuevoUsuario;