import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { browserLocalPersistence } from 'firebase/auth';


import NavBar from './components/NavBar';
import ItemListConteiner from './components/Contenedores/ListConteiner/ItemListContainer';
import ItemDetailConteiner from './components/Contenedores/DetailConteiner/ItemDetailConteiner';
import Cart from './components/Cart';
import VistaAdministrador from './components/VistaAdministrador';
import AccesoUsuario from './components/AccesoUsuario';

import { CustomProvider } from './context/CartContext';



function App() {
  

  return (
    
    <CustomProvider>
    <BrowserRouter>
       
       <NavBar></NavBar>
       
       <Routes>
          <Route path="/" element={<ItemListConteiner/>}/>
          <Route path="/listado-productos/:categoriaBuscada" element={<ItemListConteiner />}/>  
          <Route path="/detalle-producto/:id" element={<ItemDetailConteiner />}/> 
          <Route path='/cart' element={<Cart/>} />
          <Route path='/vista-administrador' element={<VistaAdministrador />}/> 
          <Route path='/acceso-usuario' element={<AccesoUsuario />}/> 
          <Route path="*" element={<ItemListConteiner />}/>
       </Routes>
    
    </BrowserRouter>

    </CustomProvider>
  );
}

export default App;
