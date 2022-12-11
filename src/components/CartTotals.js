import { useCartContext } from "../Contexts/context/cart_context";
import { useUserContext } from "../Contexts/context/user_context";
import { formatPrice } from "../utils/helper";
import { Link } from 'react-router-dom';

const CartTotals = () => {
      const { loginWithRedirect, myUser } = useUserContext();
      const { totalAmount, shippingFees } = useCartContext();

      return (
            <section className="page--content--total">
            <div>
                  <article>
                        <h5>subtotal: <span>{formatPrice(totalAmount)}</span></h5>
                        <h5>shipping fee: <span>{formatPrice(shippingFees)}</span></h5>
                        <hr />
                        <h4>order total: {' '} <span>{formatPrice(totalAmount + shippingFees)}</span></h4>
                  </article>
                  {myUser ?
                  <Link to='/checkout' className='link-1'>
                  <button className="btn btn-xl">
                        proceed to checkout
                  </button>
                  </Link> :
                  <button className="btn-xl btn" onClick={loginWithRedirect}>login</button>}
            </div>
            </section>
      )
}

export default CartTotals;