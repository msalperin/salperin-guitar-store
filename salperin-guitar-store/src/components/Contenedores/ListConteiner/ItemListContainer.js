import React, {useState, useEffect} from "react";
import "../../../styles/itemlist.css";

import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Filtros from "./Filtro"; 

import { db } from "../../../firebase/firebaseConfig";
import {getDocs, collection, query, where, onSnapshot} from "firebase/firestore";


const ItemListConteiner = () => {

    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoriaBuscada} = useParams(); 
    const {searchBar} = useParams();
    const {precio} = useParams()
  
    console.log(precio)    

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
      
        if(!categoriaBuscada && !searchBar && !precio){
          setProductos(listProducts)
         } else if(!searchBar && !precio) {
          let filtrado = listProducts.filter(producto => producto.categoria === categoriaBuscada);
          setProductos(filtrado)  
         } else if(!categoriaBuscada && !precio) {
          let filtrado = listProducts.filter(producto => producto.nombre === searchBar);
          setProductos(filtrado)  
          /* let q = query(productCollection, where('nombre', '==', `${searchBar}`));
          onSnapshot(q,(snapshot) => {
            let busqueda = []
            snapshot.docs.forEach((doc)=> {
              busqueda.push({...doc.data(), id:doc.id})
            })
            setProductos(busqueda)    
          }) */
         } else if(precio){
          let filtrado = listProducts.filter(producto => producto.precio < precio); 
          setProductos(filtrado) 
         } 
      })
      .catch((error)=>{
        console.log("salio todo mal");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    }, [categoriaBuscada, searchBar, precio]) 
    
    return ( 
        
        <div className="contenedor-listado">
 

       <Filtros></Filtros>
          

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