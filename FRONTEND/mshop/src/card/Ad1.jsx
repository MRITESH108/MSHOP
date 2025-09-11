import React, { useEffect, useState } from 'react'
import '../styles/AD1.css'

import ad1 from '../ad-images/ad1.webp';
import ad2 from '../ad-images/ad2.webp';
import ad3 from '../ad-images/ad3.webp';

const images=[ad1,ad2,ad3];


const Ad1 = () => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(()=>{
    const interval = setTimeout(()=>{
      setCurrIndex((preIndex)=>
       preIndex === images.length-1 ? 0 : preIndex+1
      );
    },3000);
    return ()=> clearTimeout(interval);
  },[currIndex]);

  return (
    <div className='slider'>
      <img className='ad1-img' src={images[currIndex]} alt="" />
    </div>
  )
}

export default Ad1
