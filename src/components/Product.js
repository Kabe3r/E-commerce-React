import { formatPrice } from '../utils/helper'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({ id, name, price, image }) => {
      
      return (
            <figure>
                  <img src={image} alt={name} />
                  <Link to={`/products/${id}`} className='link'>
                        <FaSearch />
                  </Link>
            <figcaption>
                  <h5>{name}</h5>
                  <p>{formatPrice(price)}</p>
            </figcaption>
            </figure>

      )
}

export default Product;