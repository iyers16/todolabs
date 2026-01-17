
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TerminalLayout from './components/TerminalLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <TerminalLayout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {PRODUCTS.map((product) => (
            <Route
              path={`/${product.id}`} 
              element={<ProductPage product={product} />} 
            />
          ))}
        </Routes>
      </TerminalLayout>
    </Router>
  );
};

export default App;
