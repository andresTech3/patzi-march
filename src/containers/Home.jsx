import React from 'react';
import inicialState from '../inicialState.js';
import Products from '../components/Products.jsx';

function Home() {
  return (
    <Products products ={inicialState.products}/>
  );
}

export default Home;
