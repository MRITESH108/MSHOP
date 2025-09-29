import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {clearCart} from '../features/cartSlice'

const Cart = () => {
  const dispatch = useDispatch();
  const {items, totalQuantity, totalPrice}= useSelector((state) => state.cart);

  const handleRemove = ()=>{
    console.log(items)
    dispatch(clearCart())
  }
  if(items.length === 0){
    return (<p>Your cart is empty</p>)
  }
  return (
    <div>
      <button onClick={handleRemove}>Remove</button> <br />
      <span>{totalPrice}</span>
      <br />
      <span>{totalQuantity}</span>
      {items.map((item,index)=>(
        <div key={index}>
          <li>
            <h1>{item.name}</h1>
          </li>
        </div>
      ))}
    </div>
  )
}

export default Cart

