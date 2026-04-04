import React from 'react';

function Cart(props) {
  var cartItems = props.cartItems;
  var onRemoveFromCart = props.onRemoveFromCart;
  
  // Считаем общую стоимость простым циклом
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].price;
  }
  
  // Если корзина пуста
  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Корзина</h2>
        <p>Корзина пуста</p>
      </div>
    );
  }
  
  // Если есть товары — создаём список
  var cartElements = [];
  for (var j = 0; j < cartItems.length; j++) {
    var item = cartItems[j];
    var index = j; // сохраняем индекс для замыкания
    
    cartElements.push(
      <div key={j} className="cart-item">
        <span>{item.title} - {item.author}</span>
        <span>{item.price} ₽</span>
        <button onClick={function() { 
          onRemoveFromCart(index); 
        }}>
          Удалить
        </button>
      </div>
    );
  }
  
  return (
    <div className="cart">
      <h2>Корзина</h2>
      <div className="cart-items">
        {cartElements}
      </div>
      <div className="cart-total">
        <h3>Итого: {total} ₽</h3>
        <p>Количество книг: {cartItems.length}</p>
      </div>
    </div>
  );
}

export default Cart;