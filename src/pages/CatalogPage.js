import React from 'react';
import BookList from '../components/BookList';

function CatalogPage({ books, onAddToCart }) {
  return (
    <div>
      <h1>Каталог книг</h1>
      <BookList books={books} onAddToCart={onAddToCart} />
    </div>
  );
}

export default CatalogPage;