import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { booksData } from './data/books';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Каталог</Link>
          <Link to="/cart">
            Корзина ({cartItems.length})
          </Link>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<CatalogPage books={booksData} onAddToCart={addToCart} />} 
            />
            <Route 
              path="/cart" 
              element={<CartPage cartItems={cartItems} onRemoveFromCart={removeFromCart} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;