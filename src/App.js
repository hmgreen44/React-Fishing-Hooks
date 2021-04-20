import React from 'react'
import './App.css';
import ProductsPage from './Components/ProductsPage'

function App() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col">
          <h1> Fishing Hooks </h1>
          <ProductsPage />
        </div>
      </div>
    </div>
  );
}

export default App;
