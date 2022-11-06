import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";


const SearchBar = () => {

    const navigate = useNavigate(); 
    const [busqueda, setBusqueda] = useState('')

    const handleChange = (e) => {
        if(e.target.name === 'busqueda')
           setBusqueda(e.target.value);
    }
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        navigate(`/busqueda/${busqueda}`);
 
    }  

    return (  
      <>
  
      <form onSubmit={handleSubmit} >
        <input type="text" name="busqueda" id="Busqueda"  value={busqueda} onChange={handleChange}    ></input>
        <button>Buscar</button>
      </form>
      </>

    );
}
 
export default SearchBar; 


/* <Link to={`/busqueda/${busqueda}`}>Buscar</Link> */