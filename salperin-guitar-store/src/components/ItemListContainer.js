import React, {useState, useEffect} from "react";
import itemlist from "../styles/itemlist.css";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import ItemListFilter from "./Filtros";

const productos = [
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
  })


const ItemListConteiner = ({greeting}) => {
    
    /* Llamado a Api Productos */

    const [productos, setProductos] = useState([]);

    const {id} = useParams(); 
    
    useEffect(() => {
        obtenerProductos
        .then((data)=>{
           if(!id){
             setProductos(data)
           }else{ 
             const filtrado = data.filter(producto => producto.categoria === id); 
             setProductos(filtrado)
           };
        })
        .catch((error)=>{
          console.log("salio todo mal");
          console.log(error);
        })
      }, [id])

    return ( 
        
        <div className="contenedor-listado">

        <ItemListFilter></ItemListFilter>

        <ItemList productos={productos}/>

        </div>
     
     );
}
 
export default ItemListConteiner;