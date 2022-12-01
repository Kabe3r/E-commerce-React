import { useState, useEffect } from 'react';

const Table = () => {
      const [ table, setTable ] = useState(false);

      useEffect(() => {
            const onScroll = () => {
                  if (window.scrollY > 2000) {
                        setTable(true);
                  }
            }

            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll);
            
      }, []);

      return (
            <section className="table">
            {table && 
            <div className="table--content">
            <h2>Table</h2>
            <p>Sip craft cocktails in your own personal cabana, or settle in at one of our intimate dining tables for a multi-course journey With a nod toward Hemingway’s Havana, The Canal Club serves up Caribbean-inspired classics with a contemporary twist.</p>
            <button className="btn btn-xl">Dine with us</button>
            </div>
            }
            {table && (
            <figure className="table--video">
                  <video src="https://joy.videvo.net/videvo_files/video/free/video0459/large_watermarked/_import_60cadf2f838f08.48864641_preview.mp4" autoPlay loop muted></video>
            </figure>
            )}


            </section>

      )
}

export default Table;