import { useEffect, useState } from 'react'
import '../styles/ProducCard.css'
import NumberCard from './NumberCard'
import axios from 'axios'

const ProducCard = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/allproducts')
      .then(res => setProduct(res.data.slicedData));
  }, []);

  return (
    <div className='produccard-box'>
      <h1 className='produccard-title' >Best of Electronics</h1>
      <div className='produccard-item' >
        {
          product.map((prod, index) => (
            <div style={{backgroundColor:'transparent'}} key={index}>
              <NumberCard id={prod._id} name={prod.name} price={prod.price} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProducCard

/* 
{
{},[]
}
*/