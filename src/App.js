import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choisissez la votre" data={productData} />
      <Feature />
      <Products heading="Nous vous recommandons" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
