import Categorycard from "../card/Categorycard";
import phoneimg from '../assets/phone.webp'
const category = ["Minutes","Mobiles & Tablets","Fashion","Electronics","Home & Furniture", "TVs & Appliances", "Flight Booking", "Beauty, Food & Personal Care", "Grocery"];

const Product = () => {
   
  return (
    <div>
      {/* category */}
      <div style={{backgroundColor:'rgb(255, 254, 253)',display:'flex',gap:'20px',alignItems:'center', justifyContent:'center', height:'126px', marginRight:'16px', marginLeft:'16px'}}>
        {category.map((categ)=>(
          <div style={{}}>
            <Categorycard title={categ} image={phoneimg}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
