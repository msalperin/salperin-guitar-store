import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from'@fortawesome/free-solid-svg-icons';


export const CartWidget = () => {
    return (
        <FontAwesomeIcon className="estilo-carrito" icon={faCartShopping} /> 
    )
} 

