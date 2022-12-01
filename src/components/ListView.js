import { formatPrice } from "../utils/helper";
import { Link } from 'react-router-dom';

const ListView = ({ products }) => {
      
      return (
            <section className="product--list">
                  {products.map(product => {
                        const { id, image, description, name, price } = product;

                        return (
                              <article key={id}>
                              <img src={image} alt={name} />
                              <div>
                                    <h4>{name}</h4>
                                    <h5 className='price'>{formatPrice(price)}</h5>
                                    <p>{description.substring(0, 150)}...</p>
                                    <Link to={`/products/${id}`} className='link'>
                                          Details
                                    </Link>
                              </div>
                              </article>
                        )})}
            </section>
      )
}

export default ListView;