import React from 'react';
import './assets/App.css';
import ProductCatalog from './components/FrontCatalog/productCatalog';
import Carrosel from './components/FrontCatalog/carrosselSlide';
import PersistentDrawerLeft from './components/FrontCatalog/persistentDrawer';


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