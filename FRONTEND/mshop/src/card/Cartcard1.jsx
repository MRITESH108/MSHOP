import React from 'react'
import '../styles/CartCard1.css'

const Cartcard1 = ({ item, index }) => {
  
  const handleDecreaseItem = ()=>{

  }

  const handleIncreaseItem = ()=>{

  }

  const handleRemoveItem = ()=>{
    
  }

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
