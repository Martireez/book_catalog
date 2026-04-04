import React from 'react';

function BookList(props) {
  var books = props.books;
  var onAddToCart = props.onAddToCart;
  
  // Функция для обработки клика
  function handleAddClick(book) {
    onAddToCart(book);
  }
  
  // Создаём массив карточек
  var bookCards = [];
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    bookCards.push(
      <div key={book.id} className="book-card">
        <h3>{book.title}</h3>
        <p><strong>Автор:</strong> {book.author}</p>
        <p><strong>Цена:</strong> {book.price} ₽</p>
        <button onClick={function() { handleAddClick(book); }}>
          Добавить в корзину
        </button>
      </div>
    );
  }
  
  return (
    <div className="book-list">
      {bookCards}
    </div>
  );
}

export default BookList;