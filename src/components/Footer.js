import { FaAngleDoubleDown, FaArrowCircleUp } from 'react-icons/fa'
import { useState, useEffect } from 'react';

const Footer = () => {
      const [footer, setFooter] = useState(false);

      useEffect(() => {
            const onScroll = () => {
                  if (window.scrollY > 5300) {
                        setFooter(true);
                  }
            }

           window.addEventListener('scroll', onScroll);
           return () => window.removeEventListener('scroll', onScroll);
      }, []);


      return (
            <footer className="footer">
           {footer && (
           <div className="footer">
            <article className="footer--news">
            <h3>Sign up for special offers and promotions
            <span>
            <FaAngleDoubleDown />
            </span>
            </h3>
            <div>
            </div>
            </article>
            <div className="footer--container">
            <div className="footer--container--content">
                  <p>The Scott</p>
                  <p>The Scott Resort & Spa
                  4925 North Scottsdale Road,
                  Scottsdale,
                  Arizona 85251</p>
                  <p><FaArrowCircleUp size={40}/></p>
            </div>
            <div className="footer--container--copyright">
            <small>Made by</small>
            <small>© Copyright 2022 The Scott Resort &amp; Spa</small>
            </div>
            </div>
            </div>
           )} 
            </footer>
      )
}

export default Footer;