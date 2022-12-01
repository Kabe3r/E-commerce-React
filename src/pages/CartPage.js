import { useCartContext } from '../Contexts/context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent } from '../components'

const Cart = () => {
      const { cart } = useCartContext();

      if (cart.length < 1) {
            return (
                  <section className='cart'>
                  <div className="cart--empty">
                        <h2>your cart is empty</h2>
                        <Link to="/products" className='link-1'>
                        <button className='btn-xl btn'>
                              fill it
                        </button>
                        </Link>
                  </div>
                  </section>
            )
      }

      return (
            <section className='page cart'>
            <CartContent />
            </section>
      )
}

export default Cart;