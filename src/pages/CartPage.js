import { useCartContext } from '../Contexts/context/cart_context';
import { CartContent, CartEmpty } from '../components'

const Cart = () => {
      const { cart } = useCartContext();

      if (cart.length < 1) {
            return (
                  <CartEmpty />
            )
      }

      return (
            <section className='page'>
            <CartContent />
            </section>
      )
}

export default Cart;