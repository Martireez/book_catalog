import React from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.title} - {item.author}</span>
                <span>{item.price} ₽</span>
                <button onClick={() => onRemoveFromCart(index)}>
                  Удалить
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Итого: {total} ₽</h3>
            <p>Количество книг: {cartItems.length}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;