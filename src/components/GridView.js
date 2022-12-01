import Product from './Product';

const GridView = ({ products }) => {

      return (
            <section>
                  <div className="product--grid">
                        {products.map(product => {
                              return <Product key={product.id} {...product} />
                        })}
                  </div>
            </section>
      )
}

export default GridView;