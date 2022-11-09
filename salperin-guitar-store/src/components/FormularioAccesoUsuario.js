
import React, {useState} from "react";
import '../styles/formulario.css';

import {auth} from '../firebase/firebaseConfig';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";


const FormularioAccesoUsuario = () => {
    
    const navigate = useNavigate(); 
    const[correo, establecerCorreo] = useState('');
    const[password, establecerPassword] =useState('');
  
  
    const[estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const[alerta, cambiarAlerta] = useState({});

    const handleChange = (e) => { 
        if(e.target.name === 'email'){
            establecerCorreo(e.target.value);
        } else if (e.target.name === 'password'){
            establecerPassword(e.target.value);  
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault(); 

        cambiarEstadoAlerta(false);
        cambiarAlerta({}); 
        
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
          
        if( !expresionRegular.test(correo) ){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
               tipo: 'error',
               mensaje:'Ingrese mail valido'
            })
            return;
        }    
          
        
        if(correo === '' || password === ''){
            cambiarEstadoAlerta(true);
            cambiarAlerta({
               tipo: 'error',
               mensaje:'Los campos deben estar completos'
            })
             return;
        }
        

        try {
            await signInWithEmailAndPassword(auth,correo, password);
         navigate('/');
         
         }catch(error) {
         
         cambiarEstadoAlerta(true);

         let mensaje;
         switch(error.code){
				case 'auth/wrong-password':
					mensaje = 'La contraseña no es correcta.'
					break;
				case 'auth/user-not-found':
					mensaje = 'No se encontro una cuenta con este correo electronico.'
				break;
				default:
					mensaje = 'Hubo un error al intentar crear la cuenta.'
				break;
		 }
         
         cambiarAlerta({tipo: 'error', mensaje: mensaje}) 
       
        }

        alert('Bienvenido de nuevo!')
        
    };
              
    

    return (

        <div className="contenedor-formulario">
        
          
        <h1 className="titulo-formulario">Acceder cuenta</h1>

        {estadoAlerta ? 
           <h1>{alerta.tipo} {alerta.mensaje}</h1>
        :
           <></>    
         
        }


        <form onSubmit={handleSubmit}>
         <div className="centrado-formulario">
        <label htmlFor="email">Ingrese su mail:</label>  
            <input 
               type="email"
               name="email"
               placeholder="Correo Electronico"
               value={correo}
               onChange={handleChange}
               >
            </input>
            <br></br>
        <label htmlFor="password">Ingrese su password:</label>      
            <input 
               type="password"
               name="password"
               placeholder="Contraseña"
               value={password}
               onChange={handleChange}
               >
            </input>
            <br></br>
            </div>
            
            <button className="botones-centrado">Acceder a cuenta</button>
        
       
        </form>

        </div>
      );
}
 
export default FormularioAccesoUsuario;