import React, {useContext, useState} from "react";
import carrito from "../styles/carrito.css";

import { Context } from "../context/CartContext";

import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";


const Cart = () => {
    
    const { cart, total, deleteItem, clear } = useContext(Context);
    
    const [trackingNumber, setTrackingNumber] = useState(false);
    const [numeroOrden, setNumeroOrden] = useState('')
    
    const [comprador, setComprador] = useState({})

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
    /* Agregar Formulario */
   /*  const comprador = {
      nombre: 'Gaston',
      apellido: 'Rodri',
      email: 'tonga@tonga.com'
    };  */

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

      setComprador({
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono
      }) 
    }

    const finalizarCompra = (e)=>{
      e.preventDefault()
      
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

   /*  const actualizarStock = ()=>{
      const updateStock = doc(db, "productos","KwnjSlyDslt1IneySzVr")
      updateDoc(updateStock,{stock:100})
    } */

    return (  
       <>

        <div className="carrito-conteiner">  
           
           <h1>Tu Carrito:</h1>

           <table className="table-carrito">
              <tr>
                <th>Nombre del producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>SubTotal</th>
                <th>Accion</th>
              </tr>
           {cart.map((item) => {
              return <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.cantidad} </td>
                <td>{item.cantidad*item.precio}</td>
                <td> <button className="boton-accion" onClick={() => deleteItem(item.id) }>Eliminar</button> </td>
                     </tr>  
           })}
             <tr>
               <td colSpan="3">Total:</td>
               <td className="total">$ {total}</td>
             </tr>
             
           </table>
           
          
           <button className="boton-accion" onClick={clear}>Clear</button>

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

          
           
           { trackingNumber ? 
            <h1>Hola {comprador.nombre} Tu codigo de orden es :{numeroOrden}</h1>
            :
            <button className="boton-accion"  onClick={finalizarCompra} > Finalizar Compra</button>
          }

        </div>  

       </> 
    )

} 
    
export default Cart;