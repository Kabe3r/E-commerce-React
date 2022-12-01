import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {

  switch (action.type) {

    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map(p => p.price);

      maxPrice = Math.max(...maxPrice);

      return { ...state, allProducts: action.payload, filteredProducts: action.payload, filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice } }

    case SET_GRIDVIEW:
      return { ...state, gridView: true };

    case SET_LISTVIEW:
      return { ...state, gridView: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload }

    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;

      let sortProducts = [...filteredProducts];

      switch (sort) {

        case 'price-lowest':
          sortProducts = sortProducts.sort((a, b) => a.price - b.price);
          break;

        case 'price-highest':
          sortProducts = sortProducts.sort((a, b) => b.price - a.price);
          break;

        case 'name-a':
          sortProducts = sortProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;

        case 'name-z':
          sortProducts = sortProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;


        default:
          break;
      }
      return { ...state, filteredProducts: sortProducts };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      const { allProducts } = state;
      const { text, category, company, color, price, shipping } = state.filters;

      
      let filterProducts = [...allProducts];

 
      if (text) {
        filterProducts = filterProducts.filter(item => item.name.toLowerCase().startsWith(text));
        console.log(filterProducts)
      }

      if (category !== 'all') {
        filterProducts = filterProducts.filter(item => item.category === category);
      }
      
      if (company !== 'all') {
        filterProducts = filterProducts.filter(item => item.company === company);
      }
      
      if (color !== 'all') {
        filterProducts = filterProducts.filter(item => item.colors.find(col => col === color));
      }
      
      filterProducts = filterProducts.filter(item => item.price <= price)
      
      if (shipping) {
        filterProducts = filterProducts.filter(item => item.shipping === true);
      }

      return { ...state, filteredProducts: filterProducts }

    case CLEAR_FILTERS:
      return {
        ...state, filters: {
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: state.filters.maxPrice,
          shipping: false
        }
      }


    default:
    }
    
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
