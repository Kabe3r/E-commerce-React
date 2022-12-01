import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../Contexts/context/products_context';
import { formatPrice } from '../utils/helper';
import { Loading, Error, ProductImages, Stars, AddToCart } from '../components';

const SingleProduct = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const { singleProductLoading: loading, singleProductError: error, singleProduct: product, fetchSingleProduct } = useProductsContext();

      // console.log(id)
      useEffect(() => {
       fetchSingleProduct(`${process.env.REACT_APP_SINGLE_PRODUCT_URL}${id}`)
      }, [id]);


      // recrfxv3EwpvJwvjq

      useEffect(() => {
            if (error) {
              setTimeout(() => {
                navigate('/');
              }, 3000);
            }
            // eslint-disable-next-line
          }, [error]);

      if (loading) {
            return <Loading />
      }

      if (error) {
            return <Error />;
      }

      const {name, price, description, stock, stars, reviews, id: sku, company, images} = product;

      return (
            <section className='single'>
              <div className="single--center">
              <ProductImages images={images} />
              <div className="single--center--content">
                  <h2>{name}</h2>
                  <Stars stars={stars} reviews={reviews} />
                  <h5 className='price'>{formatPrice(price)}</h5>
                  <p className='desc'>{description}</p>
                  <p className='info'>
                        <span>Available : </span>
                        {stock > 0 ? 'In stock' : 'out of stock'}
                  </p>
                  <p className='info'>
                        <span>SKU :</span>
                        {sku}
                  </p>
                  <p className='info'>
                        <span>Brand :</span>
                        {company}
                  </p>
                  <hr />
                  {stock > 0 && <AddToCart product={product} />}
              </div>

              </div>
            </section>

      );
}

export default SingleProduct;