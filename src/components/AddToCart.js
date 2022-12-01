import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Contexts/context/cart_context';
import StockBtns from './StockBtns';

const AddToCart = ({ product }) => {
      const { addToCart } = useCartContext();
      const { id, stock, colors } = product;
      const [mainColor, setMainColor] = useState(colors[0]);
      const [amount, setAmount] = useState(1);

      const increase = () => {
            setAmount(prevAmount => {
                  return prevAmount === stock ? stock : prevAmount + 1;
            })
      }

      const decrease = () => {
            setAmount(prevAmount => {
                  return prevAmount < 1 ? 1 : prevAmount - 1;
            })
      }

      return (
            <div className='single--center--content--cart'>
            <div className="colors">
            <span>colors : </span>
            <div>
                  {colors.map((color, index) => {
                        return (
                              <button
                              key={index}
                              className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
                              style={{ background: color }}
                              onClick={() => setMainColor(color)}>
                              {mainColor === color ? <FaCheck /> : null}
                              </button>
                        )})}
            </div>
            </div>
            <div className="btn-container">
            <StockBtns amount={amount} increase={increase} decrease={decrease} />
            <Link to='/cart' className='btn-cart' onClick={() => addToCart(id, mainColor, amount, product)}>
                  add to cart
            </Link>

            </div>
            </div>
      )
}

export default AddToCart;