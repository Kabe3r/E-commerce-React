import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useProductsContext } from "./Contexts/context/products_context";
import { useLocation } from "react-router-dom";

const useOnScreen = () => {
  // States
  const [isSectionVisible, setIsSectionVisible] = useState({
    itemNavBar: false,
    itemFurniture: false,
    itemGallery: false,
    itemProducts: false,
    itemFeature: false,
  });
  const [color, setColor] = useState('');

  // Context & Location
  const { singleProduct: product } = useProductsContext();
  const location = useLocation();

  // Refs
  const furnitureRef = useRef(0);
  const galleryRef = useRef(0);
  const productsRef = useRef(0);
  const featureRef = useRef(0);


  useEffect(() => {
    const primary = getComputedStyle(document.documentElement).getPropertyValue('--clr-primary');
    const white = getComputedStyle(document.documentElement).getPropertyValue('--clr-white');
    const locations = window.location.pathname === '/cart' || window.location.pathname === '/products' || window.location.pathname === `/products/${product.id}` || window.location.pathname === '/checkout';

    // Navigation
    if (locations) {
      setColor(primary);
    } else {
      setColor(white);
    }
  }, [location, product.id]);

  useLayoutEffect(() => {

    const onScrollFurniture = () => {

      // Sections Positions
      const furniturePosition = furnitureRef && furnitureRef.current && furnitureRef.current.getBoundingClientRect().top;
      const galleryPosition = galleryRef && galleryRef.current && galleryRef.current.getBoundingClientRect().top + furniturePosition - 600;
      const productsPosition = productsRef && productsRef.current && productsRef.current.getBoundingClientRect().top + galleryPosition + 500;
      const featurePosition = featureRef && featureRef.current && featureRef.current.getBoundingClientRect().top + productsPosition + 1500;


      // Scroll Positions
      const scrollPosFurniture = window.scrollY + window.innerHeight;
      const scrollPosGallery = window.scrollY + window.innerHeight - scrollPosFurniture;
      const scrollPosProducts = window.scrollY + window.innerHeight - (scrollPosGallery + scrollPosFurniture);
      const scrollPosFeature = window.scrollY + window.innerHeight - (scrollPosFurniture + scrollPosGallery + scrollPosProducts);


      // Sticky Nav
      if (window.scrollY > 500) {
        setIsSectionVisible(prevSection => ({ ...prevSection, itemNavBar: true }));
      } else {
        setIsSectionVisible(prevSection => ({ ...prevSection, itemNavBar: false }));
      }

      // Comparing Positions   
      if (scrollPosFurniture > furniturePosition) {
        setIsSectionVisible(prevSection => ({ ...prevSection, itemFurniture: true }));
      }
      if (scrollPosGallery > galleryPosition) {
        setIsSectionVisible(prevSection => ({ ...prevSection, itemGallery: true }));
      }
      if (scrollPosFeature > featurePosition) {
        setIsSectionVisible(prevSection => ({ ...prevSection, itemFeature: true }));
      }
      if (scrollPosProducts > productsPosition) {
        setIsSectionVisible(prevSection => ({ ...prevSection, itemProducts: true }));
      }

    }


    window.addEventListener('scroll', onScrollFurniture);
    return () => window.removeEventListener('scroll', onScrollFurniture);

  }, [isSectionVisible]);


  return { ...isSectionVisible, furnitureRef, galleryRef, productsRef, featureRef, color };

}

export default useOnScreen;