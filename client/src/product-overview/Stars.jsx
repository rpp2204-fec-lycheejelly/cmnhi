import React from 'react';
import calculateAverage from './lib/calculateAvg.js';
import starImage from '../assets/star.png';

import fullStar from '../assets/full-star.png';
import threeQuarterStar from '../assets/three-quarter-star.png';
import halfStar from '../assets/half-star.png';
import quarterStar from '../assets/quarter-star.png';
import emptyStar from '../assets/empty-star.png';

let Stars = ({reviews}) => {
  let avg = calculateAverage(reviews).scores;
  let total = calculateAverage(reviews).totalResponses;

    return (
      <div className="stars">
        {avg.map((star, i) => {
          if (star === 1) {
            return <img src={fullStar} alt='full-star' className='rating-star' key={i}></img>
          } else if (star === 0.75) {
            return <img src={threeQuarterStar} alt='three-quart-star' className='rating-star' key={i}></img>
          } else if (star === 0.5) {
            return <img src={halfStar} alt='half-star' className='rating-star' key={i}></img>
          } else if (star === 0.25) {
            return <img src={quarterStar} alt='quarter-star' className='rating-star' key={i}></img>
          } else {
            return <img src={emptyStar} alt='empty-star' className='rating-star' key={i}></img>
          }
        })}
      </div>
    )
}

export default Stars