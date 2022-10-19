import React, {useState} from "react";
import itemdetail from "../../../styles/itemdetail.css";
import ItemCount from "./ItemCount";

import {Link} from 'react-router-dom';
import FotoProducto from '../../../img/LesPaul.jpg';


const ItemDetail = ({producto}) => {

     const [showItemCount, setShowItemCount] = useState(true);

    /*Agregar al carrito */ 
    const onAdd = (cuenta) => {
      setShowItemCount(false);
      alert("Agregaste" + cuenta) 
    }
  
    return ( 
       
       <div className="conteiner-detail">
             
            <div className="conteiner-photo-detail">
             <img src={FotoProducto} alt='foto-detalle'></img>
            </div> 
           
            <div className="conteiner-description-detail">

             <div className="description-detail">  
              <h2>Detalle del producto:</h2>
              <br></br>
              <h2>{producto.nombre}</h2>
              <h2>$ {producto.precio}</h2>
              <br></br>
              <h2>Descripcion: Es una producto producto muy especial senti la magia en tus dedos toca como Jimi Hendrix y Yoda juntos.</h2>
                
               <div>
                 {showItemCount ?    
                 <ItemCount stock={producto.stock} onAdd={onAdd}/>
                 :
                 <Link to={'/cart'}>
                    <button>Finalizar Compra</button>
                 </Link>
                 }   
               </div>
                 
             </div>

            </div>  

       </div>  

     );
}
 
export default ItemDetail;