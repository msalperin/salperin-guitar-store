import React from "react";
import "../../../styles/itemlist.css";


import { Link } from "react-router-dom";

import Rating from "./Rating";


const Item = ({producto}) => {
    return ( 
          
        <div className="tarjeta-conteiner">

                   <img src={producto.imagen}  alt="gibson-lespaul"></img>
                   <div className="detalle-tarjeta">
                      <div className="nombre-tarjeta ">
                         <h3>{producto.nombre}</h3>
                         <h3>$ {producto.precio}</h3>
                      </div>  
                      
                      <Rating className='rate' producto={producto}></Rating>

                      <Link className="boton-tarjeta" to={`/detalle-producto/${producto.id}`}>
                       <button> + Mas detalles</button> 
                      </Link>
                   </div>
        </div>

    

     );
}



export default Item;