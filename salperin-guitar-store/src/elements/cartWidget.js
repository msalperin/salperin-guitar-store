import React, {useContext} from "react";
import { Context } from "../context/CartContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from'@fortawesome/free-solid-svg-icons';


export const CartWidget = () => {
    
    const {qty} = useContext(Context) 
    
    return (

        <>
        
        {qty > 0 ? 
        <>
        <FontAwesomeIcon className="estilo-carrito" icon={faCartShopping} />
        <div>{qty}</div>
        </>
        :
        <FontAwesomeIcon className="estilo-carrito" icon={faCartShopping} />
        }


        </>
    )
} 

