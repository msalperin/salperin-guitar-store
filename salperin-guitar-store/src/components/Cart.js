import React, {useContext} from "react";

import { Context } from "../context/CartContext";

const Cart = () => {
    
    const { cart, total } = useContext(Context);
    console.log(cart)

    return (  
       <>

        <div className="carrito-conteiner">  
           
           <h1>Carrito</h1>

           {cart.map((item)=> { 
              return <h2 key={item.id}> {item.nombre} {item.precio} {item.cantidad} {item.cantidad*item.precio}</h2>
            })
           } 
            <h1>{total}</h1>

           <table>
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
                <td>Eliminar</td>
            </tr>  
           })}
             <tr>{total}</tr>
           </table>

        </div>  

       </> 
    )

} 
    
export default Cart;