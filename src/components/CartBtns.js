import { useProductsContext } from '../Contexts/context/products_context';
import Links from './Links';
import { VscMenu } from 'react-icons/vsc';

const CartBtns = ({ itemNavBar, color }) => {
      const { openSidebar } = useProductsContext();
      
      return (
            <>
            <Links itemNavBar={itemNavBar} color={color}/>
                  <button className='menu-btn' style={{ color: color }} onClick={openSidebar}>
                  <VscMenu />
                  </button>
            </>
      )
}

export default CartBtns;