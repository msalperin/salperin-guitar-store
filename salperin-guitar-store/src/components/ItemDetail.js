import React from "react";


const ItemDetail = ({producto}) => {
    return ( 
       
       <div>
             
             <h1>Hola</h1>

             <h2>{producto.nombre}</h2>


            {/*  {productos.map((product) => {
                  return <h1 key={product.id}>{product.nombre}</h1>;
             })
             } */}
             
             

       </div>  
     );
}
 
export default ItemDetail;