import React from 'react';
import './assets/App.css';
import ProductCatalog from './components/productCatalog';
import Carrosel from './components/carrosselSlide';
import PersistentDrawerLeft from './components/persistentDrawer';


function App() {
  return (    
    <div className='App'>
      <PersistentDrawerLeft/>
    </div>
  );
}

export default App;