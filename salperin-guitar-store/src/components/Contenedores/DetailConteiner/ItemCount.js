import React, {useState} from 'react';
import itemdetail from '../../../styles/itemdetail.css';

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
        
       <div className='add-to-cart-button-conteiner'>
         
         <button className='button-add-to-cart' onClick={restarItem}>-</button>
           <h2 className='add-to-cart-count'>{cuenta}</h2>
         <button className='button-add-to-cart' onClick={sumarItem}>+</button>
         <button className='agregar-al-carrito' disabled={stock===0} onClick={agregarAlCarrito}>Agregar al Carrito <FontAwesomeIcon icon={faCartShopping}/> </button>
         
       </div>
        
       
    );
}
 
export default Contador;