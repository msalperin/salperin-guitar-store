import React, {useContext} from "react";
import { Context } from "../context/CartContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from'@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"


export const CartWidget = () => {
    
    const {qty} = useContext(Context) 
    
    return (

        <>
        
        {qty > 0 ? 
        <>
        <Link to="/cart">
        <FontAwesomeIcon className="estilo-carrito" icon={faCartShopping} />
        <div className="cantidad">{qty}</div>
        </Link>
        </>
        :
        <Link to="/cart">
        <FontAwesomeIcon className="estilo-carrito" icon={faCartShopping} />
        </Link>
        }


        </>
    )
} 

