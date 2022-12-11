import { useCartContext } from "../Contexts/context/cart_context";
import { CartEmpty, StripeCheckout } from '../components';


const Checkout = () => {
      const { cart } =  useCartContext();

      if (cart.length < 1) {
            return (
                  <CartEmpty />
            );
      }

      return (
            <section className="checkout">
            <StripeCheckout />
            </section>    
      )
}

export default Checkout;