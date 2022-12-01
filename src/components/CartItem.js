import { formatPrice } from "../utils/helper";
import { FaTrash } from 'react-icons/fa';
import StockBtns from './StockBtns';
import { useCartContext } from "../Contexts/context/cart_context";

const CartItem = ({id, image, name, color, price, amount }) => {
      const { removeItem, toggleAmount } = useCartContext();

      const increase = () => {
            toggleAmount(id, 'increase');
      }

      const decrease = () => {
            toggleAmount(id, 'decrease');
      }

      return (
            <article className="page--content--items">
                  <div className="item">
                  <img src={image} alt={name} />
                  <div className="item--next">
                  <h5 className="name">{name}</h5>
                  <p className="color">
                        color : <span style={{ background: color }}></span>
                  </p>
                  <h5 className="price-small">{formatPrice(price)}</h5>
                  </div>
                  </div>
                  <h5 className="price">{formatPrice(price)}</h5>
                  <StockBtns amount={amount} increase={increase} decrease={decrease} />
                  <h5 className="subtotal">
                        {formatPrice(price * amount)}
                  </h5>
                  <button className="remove-btn" onClick={() => removeItem(id)}>
                        <FaTrash />
                  </button>
            </article>
      )
}

export default CartItem;