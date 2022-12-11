import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useState } from 'react';
import { useProductsContext } from '../Contexts/context/products_context'

const Gallery = ({itemGallery, galleryRef}) => {
      const { products } = useProductsContext();
      const [index, setIndex] = useState(0);

      return (
            <section className="gallery" ref={galleryRef}>
            {itemGallery && 
            <div className='gallery--imgs'>
            <figure className="gallery--imgs--cover">
            {products.map((product, ind) => {
                  return (
                  <img key={ind} style={{ transform: `translate(-${index * 100}%)`}} src={product.image} alt=""  />
                  )})}
            </figure>
            <div className="gallery--imgs--carousel">
            <p>
            <small>{index + 1} / {products.length}</small>
            </p>
            <div>
            <button onClick={() => setIndex(prevIndex => prevIndex === 0 ? products.length - 1 : prevIndex - 1)}>
                  <FaLongArrowAltLeft fill='inherit' className='icon' />
            </button>
            <button onClick={() => setIndex(prevIndex => prevIndex === products.length - 1 ? 0 : prevIndex + 1)}>
                  <FaLongArrowAltRight fill='inherit' className='icon' />
            </button>
            </div>
            </div>
            </div>
            }
            </section>
      )
}

export default Gallery;