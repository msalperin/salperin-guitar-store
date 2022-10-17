import React from "react";
import itemlist from "../../../styles/itemlist.css";
import ImagenLesPaul from "../../../img/LesPaul.jpg";

import { Link } from "react-router-dom";

import Rating from "./Rating";


const Item = ({producto}) => {
    return ( 
          
        <div className="tarjeta-conteiner">

                   <img src={ImagenLesPaul} alt="gibson-lespaul"></img>
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