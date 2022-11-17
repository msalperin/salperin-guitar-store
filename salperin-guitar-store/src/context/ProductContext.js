import React, {createContext, useContext, useEffect, useState} from "react";

import { db } from "../firebase/firebaseConfig";
import {getDocs, collection} from "firebase/firestore";

export const productcontext = createContext();

export const useProduct = () =>{
    const contextproductos = useContext(productcontext);
    return contextproductos;
}

export function ProductProvider ({children}) {
    
    const [categorias, setCategorias] = useState([])
  
    const titulo = "Titulo";

    useEffect(() => {
      
      const categoriasCollection = collection(db, 'categorias');
      
      getDocs(categoriasCollection)
      .then((result) => {
      const listaCategorias = result.docs.map(categoria =>{
        return {
          ...categoria.data(),
        }
      })  
      setCategorias(listaCategorias)
      })
    }, [])
     
    return (

        <productcontext.Provider value={{categorias, titulo}}>{children}</productcontext.Provider>
    )
        
};