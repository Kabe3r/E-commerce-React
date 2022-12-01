import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaTumblrSquare, FaMedium, FaTimes } from 'react-icons/fa';
import { useProductsContext } from '../Contexts/context/products_context';
import Links from './Links';

const Sidebar = () => {
      const { isSidebarOpen, closeSidebar } = useProductsContext();

      console.log(isSidebarOpen)

      return (
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' :  'sidebar'}`}>
            <button className='close-btn' onClick={closeSidebar}>
                  <FaTimes fill='white' />
            </button>
            <div className="sidebar--cont">
                  <Links />
            {/* <div className="sidebar--cont--icons">
               <h1>Reach Us At</h1>
               <ul>
                  <li>
                        <FaFacebookSquare size={30} />
                  </li>
                  <li>
                  <FaTwitterSquare size={30} />
                  </li>
                  <li>
                        <FaLinkedin size={30} />
                  </li>
                  <li>
                        <FaTumblrSquare size={30} />
                  </li>
                  <li>
                        <FaMedium size={30} />
                  </li>
               </ul>
            </div> */}


            </div>
            </aside>
      )
}

export default Sidebar;