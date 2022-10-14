import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from'@fortawesome/free-solid-svg-icons'; 


const Contador = ({stock, onAdd}) => {
    
    const [cuenta, setCuenta] = useState(0);

    const sumarItem = () =>{
        if(cuenta < stock)
        setCuenta(cuenta + 1)        
    };

    const restarItem = () => {
        if(cuenta > 1){
            setCuenta(cuenta - 1)
        }
    }

    const agregarAlCarrito = () => {
        onAdd(cuenta);
    }
    

    return (  
        <> 
        <button onClick={restarItem}>-</button>
        <h1>{cuenta}</h1>
        <button onClick={sumarItem}>+</button>
        <button disabled={stock===0} onClick={agregarAlCarrito}><FontAwesomeIcon icon={faCartShopping}/>  </button>
        </>
       
    );
}
 
export default Contador;