import React, { useEffect } from 'react'
import '../styles/Cart.css'
import {useDispatch, useSelector} from 'react-redux'

import Cartcard1 from '../card/Cartcard1';
import CartCard2 from '../card/CartCard2';
import CartCard3 from '../card/CartCard3';
import { fetchDBdata } from '../features/cartSlice';

const Cart = () => {
    const {items,totalPrice,totalQuantity} = useSelector(state => state.cart)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchDBdata());
    },[dispatch])

  if ( !items || items.length == 0) {
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