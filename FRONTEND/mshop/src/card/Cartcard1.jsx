import React from 'react'
import '../styles/CartCard1.css'
import { useDispatch } from 'react-redux'
import { saveDBdata } from '../features/cartSlice';

const Cartcard1 = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleIncreaseItem = () => {
    dispatch(saveDBdata({
      productId: item.productId, // Not item._id
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      value: 1
    }));
  };

  const handleDecreaseItem = () => {
    dispatch(saveDBdata({
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      value: -1
    }));
  };

  const handleRemoveItem = () => {
    dispatch(saveDBdata({
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      value: -item.quantity
    }));
  };


  return (
    <div>
      <div className='cartcard1-box'>
        <li className='cartcard1-box1'>
          <h1 className='transparent'>{index + 1}.{item.name}</h1>
          <h3 className='transparent'>Price : {item.price}</h3>
          <div className='cartcard1-quantitybtn'>
            <button className='transparent' onClick={handleDecreaseItem}>-</button>
            <span className='transparent'>{item.quantity}</span>
            <button className='transparent' onClick={handleIncreaseItem}>+</button>
          </div>

          <button onClick={handleRemoveItem}>Remove</button>
        </li>
      </div>
    </div>
  )
}

export default Cartcard1
