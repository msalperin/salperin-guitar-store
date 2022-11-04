import React, {useState, useEffect} from "react";
import itemlist from "../../../styles/itemlist.css";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import ItemListFilter from "./Filtros"; 

import { db } from "../../../firebase/firebaseConfig";
import {getDocs, collection} from "firebase/firestore"

const ItemListConteiner = () => {
    
    const [productos, setProductos] = useState([]);

    const {categoriaBuscada} = useParams(); 

    const productCollection = collection(db, 'productos');
        
     useEffect(() => {
      getDocs(productCollection)
      .then((result) => {  
      const listProducts = result.docs.map(item =>{
        return {
          ...item.data(),
          id: item.id
        }
      })
        if(!categoriaBuscada){
          setProductos(listProducts)
         } else {
          const filtrado = listProducts.filter(producto => producto.categoria === categoriaBuscada);
          console.log(filtrado)
          setProductos(filtrado)  
         }
      })
      .catch((error)=>{
        console.log("salio todo mal");
        console.log(error);
      })
    }, [categoriaBuscada]) 
    
    return ( 
        
        <div className="contenedor-listado">

        <ItemListFilter></ItemListFilter>

        <ItemList productos={productos}/>

        </div>
     
     );
}
 
export default ItemListConteiner;