import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cartSlice'

const CartCard3 = () => {
  const dispatch = useDispatch();


  const handleRemove = () => {
    dispatch(clearCart())
  }
  return (
    <div>
      <button onClick={handleRemove}>Clear Cart</button>
      ......
      <button onClick={handleRemove}>Proceed to Pay</button>
    </div>
  )
}

export default CartCard3
