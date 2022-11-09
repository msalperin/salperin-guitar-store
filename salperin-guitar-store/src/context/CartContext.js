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
      const productoABorrar = cart.find((item)=>item.id === id);

      setCart(cart.filter((item) => item.id !== id)); 
      setQty(qty - productoABorrar.cantidad);
      setTotal(total - ( productoABorrar.cantidad * productoABorrar.precio)) 
    } 
    
    const clear = () => {
        setCart([]);
        setQty(0);
        setTotal(0); 
    };
    

    return (

        <Context.Provider value={{cart, qty, total, clear, deleteItem, addItem}}>{children}</Context.Provider>
    )
        
};

