
import React, {createContext, useState} from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    
    const productos = [{nombre: 'uvas'}, {nombre: 'manzanas'}];

    return (

        <ProductContext.Provider value={productos}>{children}</ProductContext.Provider>
    )
        
};