import React from 'react';
import './assets/App.css';
import ProductCatalog from './components/productCatalog';
import NavBar from './components/navBar';

function App() {
  return (
    <div>
      <NavBar />      
      <ProductCatalog />  
    </div>
    
  );
}

export default App;