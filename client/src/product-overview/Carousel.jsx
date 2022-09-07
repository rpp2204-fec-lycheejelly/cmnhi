import React from 'react';
import upArrow from '../assets/arrow-up.png';
import downArrow from '../assets/arrow-down.png';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: []
    }

    this.scrollForward = this.scrollForward.bind(this);
    this.scrollBackward = this.scrollBackward.bind(this);
  }

  componentDidUpdate() {
    if (!this.state.carousel.length) {
      this.setState({
        carousel: this.props.carousel.splice(0, 7)
      })
    }
  }

  scrollForward () {
    let result = [...this.state.carousel];
    result.shift();
    result.push(this.props.carousel[this.props.index])

    this.setState({
      carousel: result
    })
  }

  scrollBackward() {
    let result = [...this.state.carousel];
    result.pop();
    result.unshift(this.props.carousel[this.props.index])

    this.setState({
      carousel: result
    })
  }

  render() {
    return <div>
              {this.props.index !== 0 && <img src={upArrow} alt="up-arrow" className="up-arrow" onClick={this.scrollBackward}></img>}
              <div className='style-carousel'>
                        {this.state.carousel.map((photo, i) => {
                          return <img className={this.props.index === i ? "carousel-selected" : ""}
                                      onClick={() => {this.props.changeImage(i)}}
                                      src={photo.thumbnail_url}
                                      alt="style-photo"
                                      key={i}></img>
                        })}
                    </div>
              {this.props.index !== this.props.carousel.length - 1 && <img src={downArrow} alt="down-arrow" className="down-arrow" onClick={this.scrollForward}></img>}
            </div>
  }
}

export default Carousel;