import React from 'react';
import 'D:/Projects/catalog/src/assets/App.css';
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