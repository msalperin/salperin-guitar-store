
import React, {useState} from "react";


const FormularioComprador = ({setComprador}) => {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');    
    const [telefono, setTelefono] = useState(0);
    /* const [alerta, setAlerta] = useState({})
    const [estadoAlerta, setEstadoAlerta] = useState(false); */

    /* const [comprador, setComprador] = useState({}); */
    
    const handleChange = (e) => { 
        switch(e.target.name){
            case 'nombre' :
                setNombre(e.target.value);
                break;
            case 'apellido' :
                setApellido(e.target.value);
                break;
            case 'email' :
                setEmail(e.target.value);
                break;
            case 'email2' :
                setEmail2(e.target.value);
                break;
            case 'telefono' :
                setTelefono(e.target.value);
                break;    
            default:
                break;
            }    
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();

        if(email !== email2){
           /* setEstadoAlerta(true)  */
           return alert('Los mails deben coincidir')

        } 
        if (nombre === '' || apellido === '' || email === '' || email2 === '' || telefono ===''){
            /* setEstadoAlerta(true)  */
            return alert('Los campos deben estar completos') 
        } 

        setComprador({ nombre: nombre })

      /*   if(nombre === '' || apellido === '' || email === '' || email2 === '' || telefono ===''){
            setEstadoAlerta(true);
            setAlerta({
               mensaje:'Los campos deben estar completos'
            })
             return;
        } */

      /*  try{ 
           if(alerta=== false){

            setComprador({
                nombre: nombre,
                apellido: apellido,
                email: email,
                telefono: telefono,

           }) }
        } catch(error) {
            console.log(error)
        }
        */
      /*  console.log(comprador)     
           */
    }

    
    return (  
    <>

   
   <form onSubmit={handleSubmit}>
           <input 
               type="text"
               name="nombre"
               placeholder="Ingrese Nombre"
               value={nombre}
               onChange={handleChange}
               >
            </input>
            <input 
               type="text"
               name="apellido"
               placeholder="Ingrese Apellido"
               value={apellido}
               onChange={handleChange}
               >
            </input>
            <input 
               type="email"
               name="email"
               placeholder="Correo Electronico"
               value={email}
               onChange={handleChange}
               >
            </input>
            <input 
               type="email"
               name="email2"
               placeholder="Repetir Correo"
               value={email2}
               onChange={handleChange}
               >
            </input>
            <input 
               type="number"
               name="telefono"
               placeholder="Por favor colocar telefono"
               value={telefono}
               onChange={handleChange}
               >
            </input>
            <button>Finalizar Compra</button>
        </form>

   {/*      {estadoAlerta ?
          <h3>{alerta}</h3> 
        :
          <></>
        }  
    */}

      </>
    );
}
 
export default FormularioComprador;

