import React from "react";
import "../../../styles/itemlist.css";
import Item from "./Item";

const ItemList = ({productos}) => {
    
    return ( 

        <div className="contenedor-items">
           
           <h1 className="titulo-listado">Listado de Productos: </h1>   


          

          { productos.length === 0 ?
           <h1>No se encontraron productos</h1> 
           :
           productos.map((producto)=> {
            return <Item key={producto.id} producto={producto}/>
           })

          }

        </div>

     );
}
 
export default ItemList;