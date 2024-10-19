import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // The home component
import Category from './Category'; // The category component
import ProductDetails from './ProductDetails'; // The about component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
