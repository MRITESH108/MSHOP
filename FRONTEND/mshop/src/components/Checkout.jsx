import '../styles/Checkout.css'
import axios from 'axios';
import { useSelector } from 'react-redux'
import Cartcard1 from '../card/Cartcard1';
import CartCard2 from '../card/CartCard2';

const Checkout = () => {
  const { items, totalPrice, totalQuantity } = useSelector(state => state.cart);

  const handlePlaceOrder = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      'http://localhost:5000/checkout',
      {}, // empty body
      { withCredentials: true } // send cookies (JWT)
    );

    console.log(res.data);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};


  return (
    <div style={{ padding: '10px' }}>
      <div className='checkout-container'>
        {/* A. order checkout section */}
        <div style={{ backgroundColor: 'transparent' }}>
          {/* 1. LOGIN AND SHOW PHONE NUMBER */}
          <div>
            <div>
              <span>1. </span><span>Login</span>
            </div>
            <div>
              <span>Ritesh Pandey</span>
              <span>----8061005078</span>
            </div>
          </div>

          {/* 2. CHOOSE ADDRESS */}
          <div>
            <span>2. Address</span>
            <span>---THARAPARASIYA NADAULI KARAUNDI LALGANJ MIRZAPUR UTTAR PRADESH 231211</span>
          </div>

          {/* 3. LIST OF ITEMS */}
          <div>
            <div>3. Items in Cart</div>
            <div>
              {items.map((item, index) => (
                <div key={index}>
                  <Cartcard1 item={item} index={index} />
                </div>
              ))}
            </div>
            <div>
              <button onClick={handlePlaceOrder} type="submit">Place Order</button>
            </div>
          </div>
        </div>

        {/* B. PLACE ORDER  */}
        <div>
          <div>
            <CartCard2 totalPrice={totalPrice} totalQuantity={totalQuantity} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;