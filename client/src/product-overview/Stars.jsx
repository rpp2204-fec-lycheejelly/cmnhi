import React from 'react';
import calculateAverage from './lib/calculateAvg.js';

class Stars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avg: 0
    }
  }

  render() {
    return (
      <div className="stars">
        {console.log(this.props.reviews)}
        {console.log(calculateAverage(this.props.reviews))}
        <span className="star-rating"> * </span>
        <span className="star-rating"> * </span>
        <span className="star-rating"> * </span>
        <span className="star-rating"> * </span>
        <span className="star-rating"> * </span>
        <a>Read All [#] Reviews</a>
      </div>
    )
  }
}

export default Stars