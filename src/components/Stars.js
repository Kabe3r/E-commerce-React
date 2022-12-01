import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {

      const getStars = Array.from({ length: 5 }, (_, index) => {
            const number = index + 0.5;
            
            return (
                  <span key={index}>
                  {stars > number ? (
                        <BsStarFill />
                  ) : stars > index ? (
                        <BsStarHalf />
                  ) : (
                        <BsStar />
                  )}
                  </span>
            )
      })

      return (
            <div className='single--center--stars'>
            <div>{getStars}</div>
            <p>({reviews} customer reviews)</p>

            </div>
      )
}

export default Stars;