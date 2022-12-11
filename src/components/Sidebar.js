import { FaTimes } from 'react-icons/fa';
import { useProductsContext } from '../Contexts/context/products_context';
import Links from './Links';

const Sidebar = () => {
      const { isSidebarOpen, closeSidebar } = useProductsContext();


      return (
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' :  'sidebar'}`}>
            <button className='close-btn' onClick={closeSidebar}>
                  <FaTimes fill='white' />
            </button>
            <div className="sidebar--cont">
                  <Links closeSidebar={closeSidebar} />
            </div>
            </aside>
      )
}

export default Sidebar;