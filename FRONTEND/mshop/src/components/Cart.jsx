import React, { useEffect } from 'react'
import '../styles/Cart.css'
import axios from 'axios'
import { useSelector } from 'react-redux'

import Cartcard1 from '../card/Cartcard1';
import CartCard2 from '../card/CartCard2';
import CartCard3 from '../card/CartCard3';

const Cart = () => {

  useEffect(() => {
    axios.get('http://localhost:5000/cart', {
      withCredentials: true,
    })
    .then((res) => {
      console.log('Cart data:', res.data);
    })
    .catch((err) => {
      console.error('Error fetching cart:', err);
      setTimeout(() => {
        window.location.href = '/login';
      }, 1500);
    });
    
  },[]);

  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);


  if (items.length === 0) {
    return (<p>Your cart is empty</p>)
  }

  return (
    <div className='cart-box'>
      <div className='cart-itembox'>
        <div >
          {items.map((item, index) => (
            <div key={index}>
              <Cartcard1 item={item} index={index} />
            </div>
          ))}
        </div>

        <div>
          <CartCard2 totalPrice={totalPrice} totalQuantity={totalQuantity} />
        </div>
      </div>

      <div>
        <CartCard3 />
      </div>

    </div>
  )
}

export default Cart