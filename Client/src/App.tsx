import React from 'react';
import './assets/App.css';
import ProductCatalog from './components/productCatalog';
import Carrosel from './components/carrosselSlide';
import PersistentDrawerLeft from './components/persistentDrawer';


function App() {
  return (    
    <div className='App'>
      <PersistentDrawerLeft/>
      <Carrosel/>
      <ProductCatalog/>
    </div>
  );
}

export default App;