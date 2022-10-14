import React from "react";
import itemlist from "../styles/itemlist.css";
import ImagenLesPaul from "../img/LesPaul.jpg";
import { Link } from "react-router-dom";

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHorns} from'@fortawesome/free-solid-svg-icons'; 
 */

const Item = ({producto}) => {
    return ( 
          
        <div className="tarjeta-conteiner">

                   <img src={ImagenLesPaul} alt="gibson-lespaul"></img>
                   <div className="detalle-tarjeta">
                      <div className="nombre-tarjeta ">
                         <h3>{producto.nombre}</h3>
                         <h3>$ {producto.precio}</h3>
                      </div>  
                      
                      <h4>Rating</h4>

                      <Link className="boton-tarjeta" to={`/detalle-producto/${producto.id}`}>
                       <button> + Mas detalles</button> 
                      </Link>
                   </div>
        </div>

    

     );
}
 
export default Item;