import React, {createContext, useState} from "react";


export const Context = createContext();

export const CustomProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);   

    const IsInCart = (id) => cart.some((item) => item.id === id);
    
    const addItem = (item, cantidad) => {

      if(IsInCart(item.id))  {  

      const modificarCantidad = cart.map((producto) => {
            if (producto.id === item.id) {
              producto.cantidad += cantidad;
            }
            return producto;
            });
            setCart(modificarCantidad);
            } else {
            setCart([...cart, { ...item, cantidad }]);
            }

            setQty(qty + cantidad);
            setTotal(total + (item.precio * cantidad ))
                    
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }
    
    const clear = () => {
        setCart([]);
        setQty(0);
        setTotal(0); 
    };
    

    return (

        <Context.Provider value={{cart, qty, total, addItem}}>{children}</Context.Provider>
    )
        
};

/* 
const getQuantityTotal = () =>{
    let total = 0
    cart.forEach( p => total = total + p.quantity)
    return total
    } */

/* 
    Si, eso creo que es lo mas complicado.

Primero, te recomiendo crear una funcion llamada "isInCart" que recibe un id, y devuelve true or false de si esta o no esta (no te compliques mucho, hay un metodo de array que te va ayudar mucho... busca como funciona el "some")

Una vez que resuelvas eso. tu additem debería quedar algo asi:
const addItem = (producto,cantidad) =>{
if(isInCart(producto.id)){
--> Aca va la logica de sumar la cantidad por que ya esta en el carrito
}else{
--> Agrego al carrito por que no exite  (aca va lo que  ya tenes)
}

Fijate si con eso te pude ayudar, y cualquier  */

     /*  setCart([...cart, {item,cantidad}])
      setQty(qty + cantidad ) */
     
      /*  setCart(...cart, item);
      setQty(cantidad); */  