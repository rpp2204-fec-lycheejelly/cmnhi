import React from 'react';
import upArrow from '../assets/arrow-up.png';
import downArrow from '../assets/arrow-down.png';
import carouselQueue from './lib/carouselQueue.js';

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      carousel: []
    }
  }

  componentDidMount() {
    let carousel = carouselQueue(this.props.photos)

    this.setState({
      carousel
    })
  }

  render () {
    return <div className='style-carousel'>
            <img src={upArrow} alt="up-arrow" className="up-arrow"></img>
              {this.state.carousel.map((photo, i) => {
                return <img className={this.props.index === i ? "carousel-selected" : ""}
                            onClick={() => {this.props.changeImage(i)}}
                            src={photo.thumbnail_url}
                            alt="style-photo"
                            key={i}></img>
              })}
            <img src={downArrow} alt="down-arrow" className="down-arrow"></img>
          </div>
  }
}

export default Carousel;