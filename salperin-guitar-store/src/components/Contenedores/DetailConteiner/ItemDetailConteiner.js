import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail"

import { db } from "../../../firebase/firebaseConfig";
import { doc, getDoc, collection } from "firebase/firestore";

/* const productos = [
  {id:0, nombre: 'Gibson Les Paul', precio: 10000, categoria: 'guitarras', stock: 2 },
  {id:1, nombre: 'Fender Telescaster', precio: 13000, categoria: 'guitarras', stock: 3 },
  {id:2, nombre: 'Bajo Musicman', precio: 8000, categoria: 'bajos', stock: 1 },
  {id:3, nombre: 'Cable de Guitarra', precio: 2000, categoria: 'accesorios', stock: 20 },
  {id:4, nombre: 'Gibson Les Paul', precio: 10000, categoria: 'guitarras', stock: 2 },
  {id:5, nombre: 'Fender Telescaster', precio: 13000, categoria: 'guitarras', stock: 3 },
  {id:6, nombre: 'Bajo Musicman', precio: 8000, categoria: 'bajos', stock: 1 },
  {id:7, nombre: 'Cable de Guitarra', precio: 2000, categoria: 'accesorios', stock: 20 },
];

const obtenerProductos = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(productos);
    }, 2000);
    //reject("ocurrio un error en la promesa")
  })  */

const ItemDetailConteiner = () => {

    const [producto, setProducto] = useState({});
    
    const {id} = useParams(); 
    

    useEffect(() => {
      const productCollection = collection(db, "productos");
      const refDoc = doc(productCollection, id);

      getDoc(refDoc)
        .then((result) => {
          setProducto({
            id: result.id,
            ...result.data(),
          });
        })
    },[id])


  /*   useEffect(() => {
        obtenerProductos
        .then((data)=>{
        
          const productoBuscado = data.find(producto=> producto.id === Number(id))
         
          setProducto(productoBuscado);
        })
        .catch((error)=>{
          console.log("salio todo mal");
          console.log(error);
        })
      }, [id]) */
    
  
    return ( 

        <>

           <ItemDetail producto={producto}/> 

        </>
     );
}
 
export default ItemDetailConteiner;