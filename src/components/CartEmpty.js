import { Link } from 'react-router-dom';

const cartEmpty = () => {
  return (
      <section className='cart'>
      <div className="cart--empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className='link-1'>
            <button className='btn-xl btn'>
                  fill it
            </button>
            </Link>
      </div>
      </section>
  )
}

export default cartEmpty