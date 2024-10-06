import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <p>Size: {item.size}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

