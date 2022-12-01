import { useCartContext } from '../Contexts/context/cart_context';
import { useUserContext } from '../Contexts/context/user_context';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Links = ({ nav, color }) => {
      const { totalItems } = useCartContext();
      const { loginWithRedirect, logout, myUser } = useUserContext();


      return (
            <div className="wrapper">            
            <Link to="/cart" style={{ color: color }} className={`${nav ? 'cartBtn col-white' : 'cartBtn'}`}>
                        Cart
                        <span className='cartCont'>
                        <FaShoppingCart />
                        <span className='cartVal'>
                              {totalItems}
                        </span>
                        </span>
                  </Link>
                  {myUser ? (
                        <button style={{ color: color }} className={`${nav ? 'authBtn col-white': 'authBtn'}`} onClick={() => logout({ returnTo: window.location.origin })}>Logout <FaUserMinus /></button>
                    )  : (
                  <button style={{ color: color }} className={`${nav ? 'authBtn col-white': 'authBtn'}`} onClick={loginWithRedirect}>
                        Login <FaUserPlus />
                  </button>
                    )} 
                  {myUser && <Link to='/checkout' style={{ color: color}} className={`${nav ? 'authBtn col-white': 'authBtn'}`}>
                  Checkout<BsBagCheckFill />
                  </Link>} 
            </div>

      )
}

export default Links;