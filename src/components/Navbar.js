import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useProductsContext } from '../Contexts/context/products_context';
import CartBtns from './CartBtns';

const Navbar = () => {
      const [nav, setNav] = useState(false);
      const [color, setColor] = useState('');
      const { singleProduct: product } = useProductsContext();
      const location = useLocation();

      useEffect(() => {
            const onScroll = () => {
                 if (window.scrollY > 500) {
                   setNav(true);
                 } else {
                  setNav(false);
                 }
            }

            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll);

      },[]);
      
      useEffect(() => {
            const primary = getComputedStyle(document.documentElement).getPropertyValue('--clr-primary');
            const locations = window.location.pathname === '/cart' || window.location.pathname === '/products' || window.location.pathname === `/products/${product.id}` || window.location.pathname === '/checkout';
            console.log(primary)

            if (locations)  {
                  setColor(primary);
            } else {
                  setColor('#fff');
            }
           
      }, [location, product.id]);
  
      return (

            <nav className={`${nav ? 'sticky container' : 'navbar container'}`}>
                  
                  <div style={{ color: color }} className={`${nav ? 'sticky--logo' : 'navbar--logo'}`}>
                        THE<br /> SCOTT
                  </div>

                  <div className="navbar--left">
                  <div className='navbar--left--btns'>
                        <CartBtns nav={nav} color={color}/>
                  </div>
                       
                  </div>
            </nav>
      )
}


export default Navbar;