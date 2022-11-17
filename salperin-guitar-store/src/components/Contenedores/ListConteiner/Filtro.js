import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/itemlist.css";
import Slider from "../../Slider";

import { useProduct } from "../../../context/ProductContext";


const Filtros = () => {
    
     const navigate = useNavigate(); 
     const {categorias} = useProduct();  
     
     const [valueSlider, setValueSlider] = useState(50);
     const [categoria, setCategoria] = useState('')

     
     const handleInputChange = (event) => {
      if(event.target.name === categoria){
         setCategoria(event.target.value); 
      }
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
      console.log(categoria)
     }

    


     return ( 

        <div className="contenedor-filtros">

             
             <h2 className="titulo-filtros">Filtros:</h2>

            <form onSubmit={handleSubmitCategory}>
               
               <p>Categoria:</p>
               
               {categorias.map((categoria) => {
                return <div key={categoria.id}>
                           <label htmlFor={categoria.nombre}>{categoria.nombre}:</label>
                           <input type="radio" name="categoria" value={categoria.nombre} onChange={handleInputChange} ></input>
                      </div> 
               })}
              
               <button>Buscar</button>

             </form>   

             
            <form onSubmit={handleSubmit}>
              <div>
                <h3>{valueSlider}</h3>
                <Slider value={valueSlider} handleChange={handleChange} min={0} max={100000} step={500}></Slider>
               <button>Buscar</button> 
              </div>   
             </form>
            

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