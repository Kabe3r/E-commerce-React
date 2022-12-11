import { Filters, ProductList, Sort } from '../components';


const Products = () => {
      return (
            <main>
                  <div className="page">
                        <div className="page--center product">
                        <div>
                        <Filters />
                        </div>
                        <div>
                              <Sort />
                              <ProductList />
                        </div>
                        </div>
                  </div>
            </main>
      )
}

export default Products;