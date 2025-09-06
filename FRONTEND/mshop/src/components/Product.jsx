import '../styles/Product.css'
import Categorycard from "../card/Categorycard";
import Ad1 from '../card/Ad1';


const Product = () => {
   
  return (
    <div>
      {/* category */}
      <div className='product-categorybox'> 
            <Categorycard />  
      </div>
      {/* AD1 */}
        <div className='product-adbox'>
          <Ad1/>
        </div>
    </div>
  )
}

export default Product
// 8953337355