import React from "react";
import itemlist from "../styles/itemlist.css";

import Item from "./Item";

const ItemList = ({productos}) => {
    
    return ( 

        <div className="contenedor-items">
           
           <h1 className="titulo-listado">Listado de Productos: Categoria</h1>

           { productos.map((producto)=> {
             return <Item key={producto.id} producto={producto}/>
            })
          }

        </div>

     );
}
 
export default ItemList;