import React from 'react';
import BookList from '../components/BookList';

function CatalogPage(props) {
  return (
    <div>
      <h1>Каталог книг</h1>
      <BookList 
        books={props.books} 
        onAddToCart={props.onAddToCart} 
      />
    </div>
  );
}

export default CatalogPage;