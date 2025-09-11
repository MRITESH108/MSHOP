import React from 'react'
import '../styles/Categorycard.css'
import phoneimg from '../assets/phone.webp'


const category = ["Minutes", "Mobiles & Tablets", "Fashion", "Electronics", "Home & Furniture", "TVs & Appliances", "Flight Booking", "Beauty, Food & Personal Care", "Grocery"];


const Categorycard = () => {
  return (
    <div className='categorycardbox' >
      {category.map((categ, index) => (
        <div key={index} className='categorycardbox1'>
          <img className='categorycard-img' src={phoneimg} />
          <span className='categorycard-title'>{categ}</span>
        </div>

      ))}
    </div>
  )
}

export default Categorycard
