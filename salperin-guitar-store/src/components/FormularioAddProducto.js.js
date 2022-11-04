import React, {useState} from "react";

import { uploadFile } from "../firebase/firebaseConfig";

import { db } from "../firebase/firebaseConfig";
import {getDocs, collection} from "firebase/firestore";

const FormularioAgregarProducto = ({productoNuevo,categorias}) => {
 
  const [productoAAgregar, setProductoAAgregar] = useState({});   
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState(0);
  const [categoria, setCategoria] = useState('')
  /* capturando datos formulario   */
 /*  const datosIniciales = { 
  nombre:'',
  precio: 0,
  descripcion: '',
  stock: 0,
  categoria:'',
  url:'' 
  } */

/*   const [datos, setDatos] = useState({datosIniciales});   */
  
/*   const handleInputChange = e => {
    const {name,value} = e.target;
    setDatos({
    
      [name]: value
    })
  } */

  const handleInputChange = (e) => { 
    switch(e.target.name){
        case 'nombre' :
            setNombre(e.target.value);
            break;
        case 'precio' :
            setPrecio(e.target.value);
            break;
        case 'descripcion' :
            setDescripcion(e.target.value);
            break;
        case 'stock' :
            setStock(e.target.value);
            break;
        case 'categorias' :
            setCategoria(e.target.value);
            break;    
        default:
            break;
        }    
}
  
  /* logica archivo */
    const[file, setFile] = useState(null);
    const[urlArchivo, setUrlArchivo] = useState('')
    
    const handleSubmit = async(e) => {
        e.preventDefault();

    /*     try {
            const result = await uploadFile(file)
            setUrlArchivo(result);
            setProductoAAgregar({
              nombre: nombre,
              precio: precio,
              descripcion: descripcion,
              stock: stock,
              categoria: categoria,
              url: urlArchivo
            });
            
        } catch (error) {
            console.log(error);
        }

        productoNuevo(productoAAgregar) */
        
        try {
          const result = await uploadFile(file);
          setUrlArchivo(result);
          
          productoNuevo({nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            stock: stock,
            categoria: categoria,
            imagen: result
          })
          /* setProductoAAgregar({
          nombre: nombre,
          precio: precio,
          descripcion: descripcion,
          stock: stock,
          categoria: categoria,
          url: result
          })
        */
          } catch (error) {
          console.log(error);
          }

        
   

    }

   
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            
            <label for="nombre">Nombre del producto:</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre del producto" onChange={handleInputChange} ></input>
            <br/>
            <label for="precio">Precio del producto:</label>
            <input type="number" name="precio" id="precio" placeholder="Precio del producto" onChange={handleInputChange} ></input>
            <br/>
            <label for="descripcion">Descripcion:</label>
            <input type="text" name="descripcion" id="descripcion" placeholder="Descripcion" onChange={handleInputChange}  ></input>
            <br/>
            <label for="stock">Stock:</label>
            <input type="number" name="stock" id="stock" placeholder="Ingrese Stock" onChange={handleInputChange}  ></input>
            <br/>

            <p>Seleccione categoria:</p>
            
            {categorias.map((categoria) => {
               return <div key={categoria.id}>
                <input type="radio" name="categorias" value={categoria.nombre} onChange={handleInputChange} ></input>
                <label for={categoria.nombre}>{categoria.nombre}</label>
                      </div> 
            })}
   
            <br/>
            <label for="file">Foto del producto:</label>
            <input type="file" name="file" id="file" onChange={e => setFile(e.target.files[0])}></input>
            <br/>
            
            <button>Submit</button> 
        </form>
        
        
        { urlArchivo === undefined ? 
          <></>
        :
          <h1>{urlArchivo}</h1>  
        }

        </>
        
     );
}
 
export default FormularioAgregarProducto;
