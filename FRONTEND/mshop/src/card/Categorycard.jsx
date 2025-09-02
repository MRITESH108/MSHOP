import React from 'react'
import '../styles/Categorycard.css'
import photo from '../assets/ad4.webp'

const Categorycard = ({title,image}) => {
  return (
    <div style={{backgroundColor:'rgb(255, 254, 253)',display:'flex', flexDirection:'column',gap:'10px', alignItems:'center', }}>
      <img style={{width:'70px', height:'60px',backgroundColor:'transparent'}} src={image} alt="imhg" />
      <span style={{backgroundColor:'transparent'}}>{title}</span>
    </div>
  )
}

export default Categorycard
