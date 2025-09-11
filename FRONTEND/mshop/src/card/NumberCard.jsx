import '../styles/NumberCard.css'
import gyserimg from '../ad-images/fansgysers.webp'


const NumberCard = ({name, price}) => {
  

  return (
    <div  className='numbercard-box'>
      <img className='numbercard-img' src={gyserimg} alt="jfks" />
      <span className='numbercard-text'>{name}</span>
      <span className='numbercard-text'>{`From $${price}`}</span>

    </div>
  )
}

export default NumberCard
