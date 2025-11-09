import {Link} from 'react-router'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cartSlice'

const CartCard3 = () => {
  const dispatch = useDispatch();

  // CLEAR YOUR CART
  const handleRemove = ()=>{
   dispatch(clearCart());
  }
  
  return (
    <div>
      <button onClick={handleRemove}>Clear Cart</button>
      ......
      <Link to='/payment'><button >Place Order</button></Link>
    </div>
  )
}

export default CartCard3
