import React, {useContext, useState} from "react";
import "../styles/carrito.css";

import { Context } from "../context/CartContext";

import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp} from "firebase/firestore";


const Cart = () => {
    
    const { cart, total, deleteItem, clear } = useContext(Context);
    
    const [trackingNumber, setTrackingNumber] = useState(false);
    const [numeroOrden, setNumeroOrden] = useState('')
    
    const [comprador, setComprador] = useState({})
    const [hayDatosCompra, setHayDatosCompra] = useState(false)

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');    
    const [telefono, setTelefono] = useState(0);

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
         return alert('Los mails deben coincidir')

      } 
      if (nombre === '' || apellido === '' || email === '' || email2 === '' || telefono ===''){
          return alert('Los campos deben estar completos') 
      } 

      setComprador({
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono
      }); 

      setHayDatosCompra(true);

      alert('Datos enviados correctamente. Puede proseguir con la compra!.')
    }

    const finalizarCompra = (e)=>{
      e.preventDefault()
    
    if( total === 0) {
      return alert('Complete sus productos');
    } else if(hayDatosCompra === false){ 
      return alert('Ingrese sus datos'); 
    } else {   
      const ventasCollection = collection(db,"ventas");
      addDoc(ventasCollection,{
        comprador,
        items:[{cart}],
        total: total,
        date: serverTimestamp()
      })
      .then(result=>{
        setTrackingNumber(true);
        setNumeroOrden(result.id);
      }) 
      .catch(e => {
        console.log('todo mal');
        console.log(e);
      }); 
     /*  clear; */
    } 
  }  

   /*  const actualizarStock = ()=>{
      const updateStock = doc(db, "productos","KwnjSlyDslt1IneySzVr")
      updateDoc(updateStock,{stock:100})
    } */

    return (  
       <>

        <div className="carrito-conteiner">  
           
           <h1>Tu Carrito:</h1>

           <table className="table-carrito">
             <thead>
              <tr>
                <th>Nombre del producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>SubTotal</th>
                <th>Accion</th>
              </tr>
             </thead>
             <tbody>
           {cart.map((item) => {
              return <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.cantidad} </td>
                <td>{item.cantidad*item.precio}</td>
                <td> <button className="boton-accion" onClick={() => deleteItem(item.id) }>Eliminar</button> </td>
                     </tr>  
           })}
           </tbody> 
           <tfoot>
             <tr>
               <td colSpan="3">Total:</td>
               <td className="total">$ {total}</td>
               <td>  <button className="boton-accion" onClick={clear}>Clear Cart</button></td>
             </tr>
            </tfoot>
             
           </table>
        
        </div>   
      
           
      <div className="contenedor-finalizar-compra">

          
        <div className="formulario-finalizar-compra">
          <h3>Ingrese sus datos para finalizar la compra!:</h3>
           <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Ingrese su nombre:</label>
            <input 
               type="text"
               name="nombre"
               placeholder="Ingrese Nombre"
               value={nombre}
               onChange={handleChange}
               >
            </input>
            <label htmlFor="apellido">Ingrese su apellido:</label>
            <input 
               type="text"
               name="apellido"
               placeholder="Ingrese Apellido"
               value={apellido}
               onChange={handleChange}
               >
            </input>
            <label htmlFor="email">Ingrese su email:</label>
            <input 
               type="email"
               name="email"
               placeholder="Correo Electronico"
               value={email}
               onChange={handleChange}
               >
            </input>
            <label htmlFor="email2">Re-Ingrese su email:</label>
            <input 
               type="email"
               name="email2"
               placeholder="Repetir Correo"
               value={email2}
               onChange={handleChange}
               >
            </input>
            <label htmlFor="telefono">Ingrese su telefono:</label>
            <input 
               type="number"
               name="telefono"
               placeholder="Por favor colocar telefono"
               value={telefono}
               onChange={handleChange}
               >
            </input>
            <button className="boton-accion-form">Enviar Datos</button>
           </form>
        </div>    

          
        <div className="finalizar-compra"> 
           { trackingNumber ? 
            <h3 className="confirmacion-compra" >Hola {comprador.nombre}!. Gracias por tu compra. Tu codigo de orden es :{numeroOrden}</h3>
            :
            <button className="boton-accion-finalizar-compra"  onClick={finalizarCompra} > Finalizar Compra</button>
          }
        </div>

      </div>  

       </> 
    )

} 
    
export default Cart;