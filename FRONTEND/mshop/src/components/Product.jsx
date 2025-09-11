import '../styles/Product.css'
import Categorycard from "../card/Categorycard";
import Ad1 from '../card/Ad1';
import ProducCard from '../card/ProducCard';
import Ad2 from '../card/Ad2';


const Product = () => {

  return (
    <div>
      {/* category */}
      <div className='product-categorybox'>
        <Categorycard />
      </div>

      {/* AD1 */}
      <div className='product-adbox'>
        <Ad1 />
      </div>

      {/* product by category with ad */}
      <div className='product-card1'>
        <ProducCard/>
        <Ad2/>
      </div>

      {/* product by category */}
      <div className='product-card1'>
        <ProducCard/>
      </div>

      {/* product by category */}
      <div className='product-card1'>
        <ProducCard/>
      </div>

      {/* product by category */}
      <div className='product-card1'>
        <Ad2/>
        <ProducCard/>
      </div>
    </div>
  )
}

export default Product
// 8953337355