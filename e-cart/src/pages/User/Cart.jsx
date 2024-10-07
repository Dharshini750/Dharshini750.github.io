import React, { useState } from 'react';

const Cart = ({ cartItems: initialCartItems }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [quantities, setQuantities] = useState(initialCartItems.map(() => 1)); // Default quantity to 1 for each item
  const [showBill, setShowBill] = useState(false); // To show/hide the bill after purchase

  // Function to handle quantity change
  const updateQuantity = (index, amount) => {
    setQuantities(prevQuantities =>
      prevQuantities.map((quantity, i) =>
        i === index ? Math.max(1, quantity + amount) : quantity // Ensure quantity doesn't go below 1
      )
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index)); // Remove the item at the given index
    setQuantities(prevQuantities => prevQuantities.filter((_, i) => i !== index)); // Remove the corresponding quantity
  };

  // Function to calculate the total bill
  const calculateTotal = () => {
    return cartItems.reduce((total, item, index) => {
      const itemPrice = parseFloat(item.price.replace('$', '')); // Convert price to number
      return total + itemPrice * quantities[index];
    }, 0).toFixed(2);
  };

  // Function to handle purchase
  const handlePurchase = () => {
    setShowBill(true); // Display the bill after purchase
  };

  return (
    <div className="primary">
      <div style={{ padding: '20px' }}>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p>Size: {item.size}</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p>Quantity:</p>
                  <button
                    onClick={() => updateQuantity(index, -1)}
                    style={{ marginLeft: '10px', padding: '5px', cursor: 'pointer' }}
                  >
                    -
                  </button>
                  <p style={{ margin: '0 10px' }}>{quantities[index]}</p>
                  <button
                    onClick={() => updateQuantity(index, 1)}
                    style={{ padding: '5px', cursor: 'pointer' }}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    marginTop: '10px',
                    padding: '5px 10px',
                    backgroundColor: '#ff4d4d',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            {/* Purchase Button */}
            <button
              onClick={handlePurchase}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#38B2AC',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              Purchase
            </button>

            {/* Show the Bill after purchase */}
            {showBill && (
              <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
                <h3>Bill Summary:</h3>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      {item.name} - {quantities[index]} x {item.price}
                    </li>
                  ))}
                </ul>
                <h4>Total: ${calculateTotal()}</h4>
              </div>
            )}
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

