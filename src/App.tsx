import React from 'react';
import './assets/App.css';
import ProductCatalog from './components/productCatalog';
import NavBar from './components/navBar';
import Example from './components/carrosselSlide';
//import SwipeableTextMobileStepper from './components/carrosselSlide';

function App() {
  return (
    <div>
      <NavBar/>
      <Example/>
      <ProductCatalog />      
    </div>
    
  );
}

export default App;