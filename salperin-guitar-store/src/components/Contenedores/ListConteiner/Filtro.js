import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/filtros.css";
import Slider from "../../Slider";

import { useProduct } from "../../../context/ProductContext";


const Filtros = () => {
    
     const navigate = useNavigate(); 
     const {categorias} = useProduct();  
     
     const [valueSlider, setValueSlider] = useState(50);
     const [categoria, setCategoria] = useState('');

     
     const handleInputChange = (event) => {
      
      setCategoria(event.target.value);
     
     }
     
     const handleChange = (event) => {
      setValueSlider(event.target.value)
     }

     const handleSubmit = (e) =>{
      e.preventDefault();
     
      navigate(`/busqueda-precio/${valueSlider}`); 
     }
     
     const handleSubmitCategory = (e) => {
      e.preventDefault();

      navigate(`/listado-productos/${categoria}`);
     }

     return ( 

       <div className="contenedor-filtros">

             
         <h2 className="titulo-filtros">Filtros:</h2>

            <div className="contenedor-filtros-inside">

                 <form onSubmit={handleSubmitCategory}>
               
                    <h3 className="titulo-busqueda">Categoria:</h3>
               
                    <div className="container-filtro-categoria">
                      
                      
                       {categorias.map((categoria) => {
                        return <div className="etiqueta-categoria"  key={categoria.id}>
                          
                             <div className="input-categoria">
                           <input  type="radio" name="categoria" value={categoria.nombre} onChange={handleInputChange} ></input>
                             </div>
                             <label className="label-categoria"  htmlFor={categoria.nombre}>{categoria.nombre}</label> 
                           </div> 
                       })}
                     
                      <button className="boton-buscar">Buscar</button>
                    
                    </div>

                 </form>   

             
                 <form onSubmit={handleSubmit}>
                   <div>
                   <h3 className="titulo-busqueda">Precio:</h3>
                   <Slider value={valueSlider} handleChange={handleChange} min={0} max={100000} step={500}></Slider>
                   <h3>{valueSlider}</h3>                
                   <button className="boton-buscar">Buscar</button> 
                   </div>   
                 </form>
           
           </div>


       </div>
     );
}
 
export default Filtros;


/* {categorias.map((categoria) => {
   return <div className="categorias" key={categoria.id}>
    
    <label className="label-categorias" htmlFor={categoria.nombre}>{categoria.nombre}:</label>
    <input className="input-categorias" type="radio" name="categorias" value={categoria.nombre} onChange={handleInputChange} ></input>
          </div> 
})} */