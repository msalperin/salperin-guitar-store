import React, {useState, useContext} from "react";
import "../../../styles/itemdetail.css";

import ItemCount from "./ItemCount";

import { Context } from "../../../context/CartContext";

import {Link} from 'react-router-dom';



const ItemDetail = ({producto}) => {

     const [showItemCount, setShowItemCount] = useState(true);

     const {addItem} = useContext(Context);  
    
     /*Agregar al carrito */ 
    const onAdd = (cuenta) => {
      addItem(producto,cuenta);
      setShowItemCount(false);
      alert("Agregaste" + cuenta) 
    }
  
    return ( 
       
       <div className="conteiner-detail">
             
            <div className="conteiner-photo-detail">
             <img src={producto.imagen} alt='foto-detalle'></img>
            </div> 
           
            <div className="conteiner-description-detail">

             <div className="description-detail">  
              <h2>Detalle del producto:</h2>
              <br></br>
              <h2>{producto.nombre}</h2>
              <h2>$ {producto.precio}</h2>
              <br></br>
              <h2>{producto.descripcion}</h2>
                
               <div>
                 {showItemCount ?    
                 <ItemCount stock={producto.stock} onAdd={onAdd}/>
                 :
                 <>
                 <Link to={'/cart'}> 
                    <button className="boton-finalizar-compra">Finalizar Compra</button>
                 </Link>
                 <Link to={'/'}> 
                 <button className="boton-finalizar-compra">Seguir navegando</button>
                 </Link>
                 </>
                 }   
               </div>
                 
             </div>

            </div>  

       </div>  

     );
}
 
export default ItemDetail;