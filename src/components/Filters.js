import { useFilterContext } from "../Contexts/context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helper";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
	const {
		filters: {
			text,
			category,
			company,
			color,
			maxPrice,
			minPrice,
			price,
			shipping,
		},
		updateFilters,
		clearFilters,
		allProducts,
	} = useFilterContext();

	const categories = getUniqueValues(allProducts, "category");
	const companies = getUniqueValues(allProducts, "company");
	const colors = getUniqueValues(allProducts, "colors");


	console.log(text, category)
	return (
		<section className="product--filter">
		<div className="product--filter--content">
		<form onSubmit={(e) => e.preventDefault()}>

		<div className="form-control">
		<input
	      type="text"
		name="text"
		value={text}
		onChange={updateFilters}
		placeholder='search.....'
		className="search-input" />
		</div>

		<div className="form-control">
		<h5>category</h5>
            <div>
		{categories.map((cat, index) => {
		return (
		<button
		key={index}
		onClick={updateFilters}
		name="category"
		className={`${category === cat.toLowerCase() ? "active" : null}`}>{cat}</button>
            )})}
		</div>
		</div>

            <div className="form-control">
            <h5>company</h5>
            <select name="company" className="company" value={company} onChange={updateFilters}>
                  {companies.map((comp, index) => {
                        return (
                              <option key={index} value={comp}>{comp}</option>
                        )})}
            </select>
            </div>

            <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
                  {colors.map((col, index) => {
                        if (col === 'all') {
                              return (
                                    <button key={index} name='color'
                                    onClick={updateFilters} data-color='all' className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`}>all</button>
                              )
                        }
                        return (
                              <button key={index} name='color' style={{ background: col }} className={`${color === col ? 'color-btn active' : 'color-btn'}`} data-color={col} onClick={updateFilters}>
                                    {color === col ? <FaCheck />: null}
                              </button>
                        )})}
            </div>
            </div>

            <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input type="range" name='price' value={price} min={minPrice} max={maxPrice} onChange={updateFilters} />
            </div>

            <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={updateFilters} />      
            </div>

		</form>
            <button className="clear-btn" onClick={clearFilters}>clear filters</button>

		</div>
		</section>
	);
};

export default Filters;
