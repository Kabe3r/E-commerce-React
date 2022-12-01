import { useState, useEffect } from 'react';
import Product from './Product';
import Loading from './Loading';
import Error from './Error';
import { useProductsContext } from '../Contexts/context/products_context';

const FeaturedProducts = () => {
      const [feature, setFeature] = useState(false);
      const { productsLoading: loading, productsError: error, featuredProducts: featured } = useProductsContext();
      
      useEffect(() => {
            const onScroll = () => {
                  if (window.scrollY > 4900) {
                        setFeature(true);
                  }
            }
            
            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll);  
      }, []);
      
      if (loading) {
            return <Loading />;
      }

      if (error) {
            return <Error />;
      }

      return (
            <section className="featured container">
            <div className="featured--container">
            {feature && (
            <div className="featured--container--title">
            <h2>Featured Products</h2>
            <p>Inspired by you, always</p>
            </div>
            )}
            </div>
            {feature && (
            <div className="featured--products">
            {featured.map(product => {
                  return (
                     <Product key={product.id} {...product}/>
                  )
               })}  

            </div>
            )}

            </section>
      )
}

export default FeaturedProducts;