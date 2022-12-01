import { useState } from 'react';

const ProductImages = ({ images = [[]]}) => {
      const [img, setImg] = useState(images[0]);

      return (
            <figure className='single--center--images'>
                  <img src={img.url} alt="" className='single--center--images--main'/>
                  <div className='single--center--images--gallery'>
                        {images.map((image, index) => {
                              return (
                                    <img key={index} src={image.url} alt=""
                                    className={`${image.url === img.url ? 'active' : null }`}
                                     onClick={() => setImg(images[index])} />
                              )})} 
                  </div>
            </figure>
      )
}

export default ProductImages;