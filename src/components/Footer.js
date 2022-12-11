import { FaAngleDoubleDown, FaArrowCircleUp } from 'react-icons/fa'

const Footer = () => {

      return (
            <footer className="footer">
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
                  <p>The Store</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum accusantium porro.</p>
                  <p onClick={() =>{   window.scrollTo({top: 0, behavior: 'smooth'})}}><FaArrowCircleUp size={40}/></p>
            </div>
            <div className="footer--container--copyright">
            <small>Made by</small>
            <small>© Copyright 2022 The E-Commerce Store</small>
            </div>
            </div>
            </div>
            </footer>
      )
}

export default Footer;