import { Hero, Furniture, Gallery, Table, Products, FeaturedProducts } from '../components';
import { useState } from 'react';

const HomePage = () => {
      const [color, setColor] = useState({ color: '#000'});
      
      const changeColor = () => {
            setColor({ color });
      }

      return (
            <main>
            <Hero />
            <Furniture />
            <Gallery />
            <Table />
            <Products />
            <FeaturedProducts />
            </main>
      )
}

export default HomePage