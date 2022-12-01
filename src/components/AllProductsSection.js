import mainImg from '../images/mainImg.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
      const [product, setProduct] = useState(false);
      const [productOne, setProductOne] = useState(false);
      
      useEffect(() => {
            const onScroll = () => {
                  if (window.scrollY > 3700) {
                        setProduct(true);
                  }
                  if (window.scrollY > 4800) {
                        setProductOne(true);
                  }
            }

          window.addEventListener('scroll', onScroll);
          return () => window.removeEventListener('scroll', onScroll);
      }, []);

      return (
            
            <section className="products">
            {product &&  (
                  <div className="products--image">
                  <img src={mainImg} alt="" />
                  </div>
                 )}
              {productOne && (
                  <div className="products--text">
                  <div className='products--text--title'>
                  <h2>Check Out All The Products Here</h2>
                  </div>
                  <div className="products--text--desc">
                  <p>With six private sun-washed treatment rooms, La Vidorra is dedicated to your serenity and tranquility. As a guest of La Vidorra Spa at The Scott, please enjoy the complimentary use of the Resort pools, fitness center, bathrobes, slippers, and special blend of herbal teas</p>
                  <button className='btn-lg'>
                  <Link to="/products" className='link-1'>
                  buy now
                  </Link>
                  </button>
                  </div>
                  </div>
              )}   
            </section>
                 )
}

export default Products;