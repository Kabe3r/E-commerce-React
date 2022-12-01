import { GiFamilyHouse } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { useFilterContext } from "../Contexts/context/filter_context";
import { getUniqueValues } from "../utils/helper";

const Furniture = () => {
      const [furniture, setFurniture] = useState(false);
      const [furnitureOne, setFurnitureOne] = useState(false);
      const { filters: { category }, allProducts } = useFilterContext();

      useEffect(() => {

            const onScroll = () => {
                  if (window.scrollY > 200) {
                        setFurniture(true);
                  }
                  if (window.scrollY > 400) {
                        setFurnitureOne(true);   
                  }
            }

            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll)
      }, []);

      const categories = getUniqueValues(allProducts, "category");

      return (
            <section className='furniture'>
               {furniture &&  <GiFamilyHouse size={80}/>}
            <div className="furniture--container">
            {furniture && (
                  <h1>The Scott Provides You Exceptional Custom Made Furnitures To Make Your House A Home.</h1>
            )} 
            </div>
            <div className="furniture--content">
            {furnitureOne && (
            <figure className='furniture--content--figure'>
            <a href="/">
                  <img src="https://www.thescottresort.com/wp-content/uploads/2018/10/pool-view-hero.jpg" alt="room-img" width="800" height="800" />
            </a>
            </figure>
            )}
            <div className="furniture--content--text">
            {furnitureOne && (
            <div className='furniture--content--text--animate'>
                  <h2>Stay with us</h2>
            </div>
            )}
            {furnitureOne && (
                  <div className="check">
                  <ul>
                  {categories.slice(1, -1).map((category, index) => {
                        return (
                        <li key={index}>
                        <h5>{category}</h5>
                        </li>
                        )})}
                  <button className='btn-xl btn'>View All Furnitures</button>
                  </ul>
                  </div>
            )}
            </div>
            </div>
            </section>
      );
}

export default Furniture;