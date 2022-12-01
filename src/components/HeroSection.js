import mainImg  from '../images/mainImg.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
      const [dataAnim, setDataAnim] = useState(false);


      useEffect(() => {
            setTimeout(() => {
                  setDataAnim(true);
            }, 2000);
      }, [dataAnim]);


      return (
            <section className="section">
           
           <div className='another'>
            <img src={mainImg} alt="img" className='animation' />
            </div>
                  {dataAnim && (
                  <div className="section--container">
                  <figure className='section--container--video'>
                  <video src="https://joy.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Metal_Wind_Chimes_at_Sunset_preview.mp4" autoPlay loop muted></video>
            </figure>
                   <div className='section--container--content'>
                  <h1>
                  <span>Build </span> 
                  <br />
                  <span>Yourself </span>
                  <br /> 
                  <span>Home</span>
                  </h1>
                  <div>
                  <button className='btn-lg'>
                  <Link to='cart' className='link-1'>
                  buy now
                  </Link>
                  </button>
                
                  </div>
                   </div>
                  </div>
                  )}
            </section>
      );
}

export default Hero;