import { FaPlus, FaMinus } from 'react-icons/fa';

const StockBtns = ({ increase, decrease, amount }) => {
      return (
            <div className="stock-btns">
                  <button className='stock-btn' onClick={decrease}>
                        <FaMinus />
                  </button>
                  <h2 className='stock'>{amount}</h2>
                  <button className='stock-btn' onClick={increase}>
                        <FaPlus />
                  </button>
            </div>
      )
}

export default StockBtns;