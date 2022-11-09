import React, {useState} from "react";
import "../styles/administrador.css";

import { uploadFile } from "../firebase/firebaseConfig";



const FormularioAgregarProducto = ({productoNuevo,categorias}) => {
   
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState(0);
  const [categoria, setCategoria] = useState('')


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
          } catch (error) {
          console.log(error);
          }
    }

   
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="nombre">Nombre del producto:</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre del producto" onChange={handleInputChange} ></input>
            <br/>
            <label htmlFor="precio">Precio del producto:</label>
            <input type="number" name="precio" id="precio" placeholder="Precio del producto" onChange={handleInputChange} ></input>
            <br/>
            <label htmlFor="descripcion">Descripcion:</label>
            <input type="text" name="descripcion" id="descripcion" placeholder="Descripcion" onChange={handleInputChange}  ></input>
            <br/>
            <label htmlFor="stock">Stock:</label>
            <input type="number" name="stock" id="stock" placeholder="Ingrese Stock" onChange={handleInputChange}  ></input>
            <br/>

            <p>Seleccione categoria:</p>
            
            {categorias.map((categoria) => {
               return <div className="categorias" key={categoria.id}>
                
                <label className="label-categorias" htmlFor={categoria.nombre}>{categoria.nombre}:</label>
                <input className="input-categorias" type="radio" name="categorias" value={categoria.nombre} onChange={handleInputChange} ></input>
                      </div> 
            })}
   
            <br/>
            <label htmlFor="file">Foto del producto:</label>
            <input type="file" name="file" id="file" onChange={e => setFile(e.target.files[0])}></input>
            <br/>
            
            <button className="boton-submit">Submit</button> 
        </form>
        <br></br>
        <p>*Formulario sin validar todavia. Por favor completar todo.</p>
        

        </>
        
     );
}
 
export default FormularioAgregarProducto;
