import '../styles/NumberCard.css'
import gyserimg from '../ad-images/fansgysers.webp'
import { Link } from 'react-router'

const NumberCard = ({id,name, price}) => {
  

  return (
    <Link to={`/products/${id}`} style={{textDecoration:'none', color:'inherit'}}>
      <div  className='numbercard-box'>
      <img className='numbercard-img' src={gyserimg} alt="jfks" />
      <span className='numbercard-text'>{name}</span>
      <span className='numbercard-text'>{`From $${price}`}</span>

    </div>
    </Link>
  )
}

export default NumberCard
