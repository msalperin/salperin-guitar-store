import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Vistas */
import NavBar from './components/NavBar';
import ItemListConteiner from './components/Contenedores/ListConteiner/ItemListContainer';
import ItemDetailConteiner from './components/Contenedores/DetailConteiner/ItemDetailConteiner';
import Cart from './components/Cart';
import VistaAdministrador from './components/VistaAdministrador';
import AccesoUsuario from './components/AccesoUsuario';
import VistaUsuario from './components/VistaUsuario'; 

import { RutaProtegida } from './components/RutaProtegida';

import { CustomProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  
  return (
    
    <CustomProvider>
    <AuthProvider>
    <ProductProvider> 

    <BrowserRouter>
       
       <NavBar></NavBar>
       
       <Routes>
          <Route path="/" element={<ItemListConteiner/>}/>
          <Route path="/listado-productos/:categoriaBuscada" element={<ItemListConteiner />}/>
          <Route path="/busqueda/:searchBar" element={<ItemListConteiner />}/>
          <Route path="/busqueda-precio/:precio" element={<ItemListConteiner />}/>    
          <Route path="/detalle-producto/:id" element={<ItemDetailConteiner />}/> 
          <Route path='/cart' element={<Cart/>} />
          <Route path='/vista-administrador' element={<VistaAdministrador />}/> 
          <Route path='/acceso-usuario' element={<AccesoUsuario />}/>
          <Route path='/perfil-usuario' element={<RutaProtegida><VistaUsuario/> </RutaProtegida> }/> 
          <Route path="*" element={<ItemListConteiner />}/>
       </Routes>
    
    </BrowserRouter>

    </ProductProvider> 
    </AuthProvider>      
    </CustomProvider>
  );
}

export default App;
