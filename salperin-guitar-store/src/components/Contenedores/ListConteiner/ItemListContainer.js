import React, {useState, useEffect} from "react";
import "../../../styles/itemlist.css";

import { useParams } from "react-router-dom";


import ItemList from "./ItemList";
import ItemListFilter from "./Filtros"; 

import { db } from "../../../firebase/firebaseConfig";
import {getDocs, collection, query, where, onSnapshot} from "firebase/firestore";



const ItemListConteiner = () => {

   

    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoriaBuscada} = useParams(); 
    const {searchBar} = useParams();

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
      
        if(!categoriaBuscada && !searchBar){
          setProductos(listProducts)
         } else if(!searchBar) {
          const filtrado = listProducts.filter(producto => producto.categoria === categoriaBuscada);
          setProductos(filtrado)  
         } else {
          const q = query(productCollection, where('nombre', '==', `${searchBar}`));
          onSnapshot(q,(snapshot) => {
            let busqueda = []
            snapshot.docs.forEach((doc)=> {
              busqueda.push({...doc.data(), id:doc.id})
            })
            setProductos(busqueda)    
          })
         } 
      })
      .catch((error)=>{
        console.log("salio todo mal");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    }, [categoriaBuscada, searchBar]) 
    
    return ( 
        
        <div className="contenedor-listado">
 

       <ItemListFilter></ItemListFilter>
          

        { loading ?
           <>
           <h1 className="cargando">Cargando productos!...</h1>

           </>
        :  
          <>  
          
           <ItemList productos={productos}/>
          </>
        }

       

        </div>
     
     );
}
 
export default ItemListConteiner;