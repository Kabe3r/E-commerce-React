import { useCartContext } from '../Contexts/context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
      const { cart, clearCart } = useCartContext();

      return (
            <section className='page--content'>
                  <CartColumns />
                  {cart.map(item => {
                        return (
                              <CartItem key={item.id} {...item} />
                        )})}
                        <hr />
                        <div className="page--content--link">
                              <Link to="/products" className='btn-cart'>
                                    continue shopping
                              </Link>
                              <button className='clear-btn' onClick={clearCart}>clear shopping cart</button>
                        </div>
                        <CartTotals />
            </section>
      )
}

export default CartContent;