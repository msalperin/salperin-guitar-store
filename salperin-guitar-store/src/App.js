
import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListContainer';

function App() {
  
  const nombreUsuario = "Luis Gonzales"
  const greeting = "Hola. Its a long way to the top."

  return (
    <div>
       <NavBar nombreUsuario={nombreUsuario}></NavBar>
       <ItemListConteiner greeting={greeting}></ItemListConteiner>       
    </div>
  );
}

export default App;
