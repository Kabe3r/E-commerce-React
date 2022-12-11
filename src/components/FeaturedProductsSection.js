import Product from './Product';
import Loading from './Loading';
import Error from './Error';
import { useProductsContext } from '../Contexts/context/products_context';

const FeaturedProducts = ({ itemFeature, featureRef }) => {
      const { productsLoading: loading, productsError: error, featuredProducts: featured } = useProductsContext();
            

      if (loading) {
            return <Loading />;
      }

      if (error) {
            return <Error />;
      }

      return (
            <section className="featured" ref={featureRef}>
            {itemFeature && (
            <div className="featured--container">
            <div className="featured--container--title">
            <h2>Featured Products</h2>
            <p>Inspired by you, always</p>
            </div>
            <div className="featured--products">
            {featured.slice(0,4).map(product => {
                  return (
                     <Product key={product.id} {...product}/>
                  )
               })}  

            </div>
            </div>
            )}

            </section>
      )
}

export default FeaturedProducts;