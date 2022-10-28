import React, {useContext} from "react";
import carrito from "../styles/carrito.css";

import { Context } from "../context/CartContext";

const Cart = () => {
    
    const { cart, total, deleteItem, clear } = useContext(Context);
    console.log(cart)

   /*  const agregarAlCarrito = () => {
      deleteItem();
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
                <td> <button onClick={() => deleteItem(item.id) }>Eliminar</button> </td>
            </tr>  
           })}
             <tr>
               <td colSpan="3">Total:</td>
               <td>{total}</td>
             </tr>
             
           </table>

           <button onClick={clear}>Clear</button>


        </div>  

       </> 
    )

} 
    
export default Cart;