import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avg: 0
    }
  }

  calculateAverage(ratings) {
    let scoreTotal = 0;
    let totalResponses = 0;

    for (var key in ratings) {
      scoreTotal += ratings[key] * key;
      totalResponses += parseInt(ratings[key]);
    }

    let average = scoreTotal / totalResponses;

    return Math.round((average * 10)) / 10;
  }

  render() {
    return (
      <div className="stars">
        {console.log(this.props.reviews)}
        {console.log(this.calculateAverage(this.props.reviews))};
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