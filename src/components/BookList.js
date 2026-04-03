import React from 'react';

function BookList({ books, onAddToCart }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book-card">
          <h3>{book.title}</h3>
          <p><strong>Автор:</strong> {book.author}</p>
          <p><strong>Цена:</strong> {book.price} ₽</p>
          <button onClick={() => onAddToCart(book)}>
            Добавить в корзину
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;