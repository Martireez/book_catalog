import React from 'react';
import Cart from '../components/Cart';

function CartPage({ cartItems, onRemoveFromCart }) {
  return (
    <div>
      <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
}

export default CartPage;