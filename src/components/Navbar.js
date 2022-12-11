import { Link } from 'react-router-dom';
import CartBtns from './CartBtns';
import useOnScreen from '../useOnScreen';

const Navbar = () => {
      const { itemNavBar, color } = useOnScreen();
  
      return (

            <nav className={`${itemNavBar ? 'sticky container' : 'navbar container'}`}>
                  
                  <div style={{ color: color }} className={`${itemNavBar ? 'sticky--logo' : 'navbar--logo'}`}>
                        <h5>
                        <Link className='logo' to='/'>
                        THE<br /> STORE
                        </Link>
                        </h5>
                  </div>

                  <div className="navbar--left">
                  <div className='navbar--left--btns'>
                        <CartBtns itemNavBar={itemNavBar} color={color}/>
                  </div>
                       
                  </div>
            </nav>
      )
}


export default Navbar;