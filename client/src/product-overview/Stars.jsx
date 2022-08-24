import React from 'react';
import calculateAverage from './lib/calculateAvg.js';
import starImage from '../assets/star.png';

let Stars = ({reviews}) => {
  let avg = calculateAverage(reviews).scores;
  let total = calculateAverage(reviews).totalResponses;

    return (
      <div className="stars">
        {avg.map((star, i) => {
          return (<div className="star-container" key={i}>
                    <div className="star-fill" style={{"width" : `${parseInt(star*31)}px`}}>
                      <img className="star-outline" src={starImage} alt="star alt"></img>
                    </div>
                  </div>)
        })}
        <a>Read All {total} Reviews</a>
      </div>
    )
}

export default Stars