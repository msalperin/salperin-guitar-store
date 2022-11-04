import React, {useContext, useState} from "react";
import carrito from "../styles/carrito.css";

import { Context } from "../context/CartContext";

import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";


const Cart = () => {
    
    const { cart, total, deleteItem, clear } = useContext(Context);
    
    const [trackingNumber, setTrackingNumber] = useState(false);
    const [numeroOrden, setNumeroOrden] = useState('')
    
    /* Agregar Formulario */
    const comprador = {
      nombre: 'Gaston',
      apellido: 'Rodri',
      email: 'tonga@tonga.com'
    };

    const finalizarCompra = ()=>{
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
           
           { trackingNumber ? 
            <h1>Tu codigo de orden es :{numeroOrden}</h1>
            :
            <button className="boton-accion"  onClick={finalizarCompra}> Finalizar Compra</button>
          }

        </div>  

       </> 
    )

} 
    
export default Cart;