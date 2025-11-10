import React, { useState } from 'react';

const FlipkartStyleCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Smartphone XYZ', price: 12000, quantity: 1 },
    { id: 2, name: 'Wireless Earbuds', price: 2500, quantity: 2 },
    { id: 3, name: 'Smartwatch ABC', price: 8000, quantity: 1 },
    { id: 4, name: 'Laptop DEF', price: 45000, quantity: 1 },
    { id: 5, name: 'Bluetooth Speaker', price: 3000, quantity: 1 },
    { id: 6, name: 'Gaming Mouse', price: 1500, quantity: 1 },
    { id: 7, name: 'Mechanical Keyboard', price: 4000, quantity: 1 },
    { id: 8, name: '4K Monitor', price: 20000, quantity: 1 },
    { id: 9, name: 'External Hard Drive', price: 6000, quantity: 1 },
    { id: 10, name: 'USB-C Hub', price: 2500, quantity: 1 },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">My Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-20">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-gray-600 mt-1">₹{item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-gray-800">₹{item.price * item.quantity}</span>
                  <button 
                    onClick={() => handleRemove(item.id)}
                    className="bg-yellow-400 text-gray-900 px-3 py-1 rounded hover:bg-yellow-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end items-center space-x-4">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FlipkartStyleCart;
