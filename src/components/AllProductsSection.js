import mainImg from '../images/mainImg.jpg';
import { Link } from 'react-router-dom';

const Products = ({ itemProducts, productsRef }) => {


      return (
            
            <section className="products" ref={productsRef}>
            {itemProducts &&  (
                  <>
                  <div className="products--image">
                  <img src={mainImg} alt="" />
                  </div>
                  <div className="products--text">
                  <div className='products--text--title'>
                  <h2>Check Out All The Products Here</h2>
                  </div>
                  <div className="products--text--desc">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet repudiandae a molestiae odio. Maiores, sapiente. Fuga debitis accusantium dolorum officia accusamus quod eaque tenetur atque tempore? Maxime dolore laboriosam doloremque.</p>
                  <button className='btn-lg'>
                  <Link to="/cart" className='link-1'>
                  buy now
                  </Link>
                  </button>
                  </div>
                  </div>
                  </>
              )}   
            </section>
                 )
}

export default Products;