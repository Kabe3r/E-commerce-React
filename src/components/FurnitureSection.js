import furnitureImg from '../images/furnitureImg.jpeg';
import { GiFamilyHouse } from 'react-icons/gi';
import { useFilterContext } from "../Contexts/context/filter_context";
import { getUniqueValues } from "../utils/helper";
import { Link } from 'react-router-dom';

const Furniture = ({itemFurniture, furnitureRef}) => {
      const { allProducts } = useFilterContext();
      
      
      const categories = getUniqueValues(allProducts, "category");
      
      return (
            <section className='furniture' ref={furnitureRef}>
            {itemFurniture && (
                  <div>
               <GiFamilyHouse size={80}/>
            <div className="furniture--container">
                  <h1>The Store Provides You Exceptional Custom Made Furnitures To Make Your House A Home.</h1>
            </div>
            <div className="furniture--content">
            <figure className='furniture--content--figure'>
            <a href="/">
                  <img src={furnitureImg} alt='furniture-img' width="800" height="800" />
            </a>
            </figure>
            <div className="furniture--content--text">
            <div className='furniture--content--text--animate'>
                  <h2>Stay with us</h2>
            </div>
                  <div className="check">
                  <ul>
                  {categories.slice(1, -1).map((category, index) => {
                        return (
                        <li key={index}>
                        <h5>{category}</h5>
                        </li>
                        )})}
                        <Link to='/products' className='link-1'>
                  <button className='btn-xl btn'>View All Furnitures</button>
                        </Link>
                  </ul>
                  </div>
            </div>
            </div>
                  </div>
            )} 
            </section>
      );
}

export default Furniture;