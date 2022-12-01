import { useFilterContext } from '../Contexts/context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = () => {
      const { filteredProducts: products, gridView, setGridView, setListView, sort, updateSort } = useFilterContext();

      return (
            <section className='product--sort'>
            <div className="btn-container">
                  <button className={`${gridView && 'active'}`} onClick={setGridView}>
                  <BsFillGridFill />
                  </button>
                  <button className={`${!gridView && 'active'}`} onClick={setListView}>
                  <BsList />
                  </button>
            </div>
            <p>{products.length} products found</p>
            <hr />
            <form>
            <label htmlFor="sort">sort by</label>
            <select name="sort" id="sort" className='sort-select' value={sort} onChange={updateSort}>
                  <option value="price-lowest">price (lowest)</option>
                  <option value="price-highest">price (highest)</option>
                  <option value="name-a">name (a-z)</option>
                  <option value="name-z">name (z-a)</option>
            </select>
            </form>
            </section>
      )
}

export default Sort;