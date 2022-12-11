import { Hero, Furniture, Gallery, Products, FeaturedProducts } from '../components';
import useOnScreen from '../useOnScreen';

const HomePage = () => {
      const { itemFurniture, furnitureRef, itemGallery, galleryRef, itemProducts, productsRef, itemFeature, featureRef } = useOnScreen();

      return (
            <main> 
            <Hero />
            <Furniture itemFurniture={itemFurniture} furnitureRef={furnitureRef}/>
            <Gallery  itemGallery={itemGallery} galleryRef={galleryRef}/>
            <Products itemProducts={itemProducts} productsRef={productsRef} />
            <FeaturedProducts itemFeature={itemFeature} featureRef={featureRef}/>
            </main>
      )
}

export default HomePage