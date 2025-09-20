import { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/cart', {
      withCredentials: true,
    })
    .then(res => {
      setCart(res.data.fakeCart);
    })
    .catch(err => {
      console.error(err);
      setError('You must be logged in to access the cart.');
      
      setTimeout(() => {
        window.location.href = '/login';
      }, 1500);
    });
  },[]);

  return (
    <div>
      <h2>Your Cart</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!cart && !error && <p>Loading cart...</p>}

      {cart && (
        <ul>
          {cart.items.map((item, index) => (
            <li key={index}>
              {item.product} — Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
