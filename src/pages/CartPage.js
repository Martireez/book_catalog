import React from 'react';
import Cart from '../components/Cart';

function CartPage(props) {
  return (
    <div>
      <Cart 
        cartItems={props.cartItems} 
        onRemoveFromCart={props.onRemoveFromCart} 
      />
    </div>
  );
}

export default CartPage;