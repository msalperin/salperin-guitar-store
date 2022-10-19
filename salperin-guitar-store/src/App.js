import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from './components/NavBar';
import ItemListConteiner from './components/Contenedores/ListConteiner/ItemListContainer';
import ItemDetailConteiner from './components/Contenedores/DetailConteiner/ItemDetailConteiner';
import Cart from './components/Cart';

function App() {
  
  const nombreUsuario = "Luis Gonzales"
  const greeting = "Hola. Its a long way to the top."

  return (
    
    <BrowserRouter>
    
      <div>
       
       <NavBar nombreUsuario={nombreUsuario}></NavBar>
       
       <Routes>
          <Route path="/" element={<ItemListConteiner greeting={greeting} />}/>
          <Route path="/listado-productos/:id" element={<ItemListConteiner />}/>  
          <Route path="/detalle-producto/:id" element={<ItemDetailConteiner />}/> 
          <Route path='/cart' element={<Cart/>} />
          <Route path="*" element={<ItemListConteiner />}/>
       </Routes>
      
      </div>
    
    </BrowserRouter>
  );
}

export default App;
