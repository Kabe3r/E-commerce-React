import { useProductsContext } from '../Contexts/context/products_context';
import Links from './Links';
import { VscMenu } from 'react-icons/vsc';

const CartBtns = ({ nav, color }) => {
      const { openSidebar } = useProductsContext();
      
      return (
            <>
            <Links nav={nav} color={color}/>
                  <button className='menu-btn' style={{ color: color }} onClick={openSidebar}>
                  <VscMenu />
                  </button>
            </>
      )
}

export default CartBtns;