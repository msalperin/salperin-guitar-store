import React, {useState} from "react";
import '../../../styles/navbar.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from'@fortawesome/free-solid-svg-icons'; 


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

      <form className="buscador-form" onSubmit={handleSubmit} >
        <input className="buscador-input" type="text" name="busqueda" id="Busqueda" placeholder="Buscar!" value={busqueda} onChange={handleChange}    ></input>
        <button className="buscador-button"> <FontAwesomeIcon className="lupa" icon={faMagnifyingGlass} /></button>
      </form>
      </>

    );
}
 
export default SearchBar; 


