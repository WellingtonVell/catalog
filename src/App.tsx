import React from 'react';
import './assets/App.css';
import ProductCatalog from './components/productCatalog';
import NavBar from './components/persistentDrawer';
import Example from './components/carrosselSlide';
import PersistentDrawerLeft from './components/persistentDrawer';
//import SwipeableTextMobileStepper from './components/carrosselSlide';

function App() {
  return (
    <div>
      <PersistentDrawerLeft/>
      <Example/>
      <ProductCatalog />      
    </div>
    
  );
}

export default App;