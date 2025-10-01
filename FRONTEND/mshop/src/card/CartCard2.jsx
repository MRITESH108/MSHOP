import React from 'react'
import '../styles/CartCard2.css'

const CartCard2 = ({ totalPrice, totalQuantity }) => {
  return (
    <div className='cartcard2-box'>
      <div className='transparent'>
        <strong className='transparent'><span className='transparent'>Sum Total Price : </span></strong>
        <span className='transparent' id='price'>{totalPrice}</span>
      </div>
      <div className='transparent'>
        <strong className='transparent'><span className='transparent'> Total Quantity : </span></strong>
        <span className='transparent' id='price'>{totalQuantity}</span>
      </div>
    </div>
  )
}

export default CartCard2
