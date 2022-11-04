import React, {useState, useEffect} from "react";

import FormularioAgregarProducto from "./FormularioAddProducto.js.js";

import { db } from "../firebase/firebaseConfig.js";
import { collection, getDocs, addDoc} from "firebase/firestore";

const VistaAdministrador = () => {
    
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
    
        const categoriasCollection = collection(db, 'categorias');
        
        getDocs(categoriasCollection)
        .then((result) => {
        const listaCategorias = result.docs.map(categoria =>{
          return {
            ...categoria.data(),
            id: categoria.id 
          }
        })  
        setCategorias(listaCategorias)
        })
    }, []);

    const productoNuevo = (ObjetoProductoNuevo) => {
        console.log(ObjetoProductoNuevo)
        console.log(ObjetoProductoNuevo.precio)

        const productosCollection = collection(db,"productos");
        addDoc(productosCollection,{
          nombre: ObjetoProductoNuevo.nombre,
          precio: parseInt(ObjetoProductoNuevo.precio),
          imagen: ObjetoProductoNuevo.imagen
        }) 
        .catch(e => {
          console.log('todo mal');
          console.log(e);
        }); 
    }

    return ( 
       <>
        <h1>Formulario Agregar Producto:</h1> 
        <FormularioAgregarProducto productoNuevo={productoNuevo} categorias={categorias}></FormularioAgregarProducto>
       </> 
    )    
     
}
 
export default VistaAdministrador;