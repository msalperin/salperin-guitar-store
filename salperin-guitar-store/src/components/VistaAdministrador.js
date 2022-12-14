import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/administrador.css";
import FormularioAgregarProducto from "./FormularioAddProducto.js.js";

import { db } from "../firebase/firebaseConfig.js";
import { collection, getDocs, addDoc} from "firebase/firestore";

const VistaAdministrador = () => {
    
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]);

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
       

        const productosCollection = collection(db,"productos");
        addDoc(productosCollection,{
          nombre: ObjetoProductoNuevo.nombre,
          precio: parseInt(ObjetoProductoNuevo.precio),
          imagen: ObjetoProductoNuevo.imagen,
          descripcion: ObjetoProductoNuevo.descripcion,
          stock: parseInt(ObjetoProductoNuevo.stock),
          categoria: ObjetoProductoNuevo.categoria
        }) 
        .catch(e => {
          console.log(e);
        }); 

        alert('Producto agregado!')
        navigate('/')

    }

    return ( 
       <>
        <div className="contenedor-agregar-producto">
        <h1 className="titulo-agregar-producto">Formulario Agregar Producto:</h1> 
        <FormularioAgregarProducto productoNuevo={productoNuevo} categorias={categorias}></FormularioAgregarProducto>
        </div> 
       </> 
    )    
     
}
 
export default VistaAdministrador;