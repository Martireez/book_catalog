import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { booksData } from './data/books';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  // Простое состояние (это можно оставить — это базовая конструкция React)
  const [cartItems, setCartItems] = useState([]);

  // Функция добавления
  function addToCart(book) {
    var newCart = [];
    for (var i = 0; i < cartItems.length; i++) {
      newCart.push(cartItems[i]);
    }
    newCart.push(book);
    setCartItems(newCart);
  }

  // Функция удаления
  function removeFromCart(index) {
    var newCart = [];
    for (var i = 0; i < cartItems.length; i++) {
      if (i !== index) {
        newCart.push(cartItems[i]);
      }
    }
    setCartItems(newCart);
  }

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
              element={
                <CatalogPage 
                  books={booksData} 
                  onAddToCart={addToCart} 
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems} 
                  onRemoveFromCart={removeFromCart} 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;