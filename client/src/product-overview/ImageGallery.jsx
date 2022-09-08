import React from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import Carousel from './Carousel.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'default',
      photoIndex: 0
    }
  }

  componentDidUpdate() {
    let carousel = [...this.props.photos];

    if(!this.props.carousel.length) {
      this.props.spliceCarousel(carousel)
    } else {
      if (this.props.carousel[0].url !== this.props.photos[this.props.frontIdx].url) {
        this.props.spliceCarousel(carousel)
      }
    }
  }

  changeImage(index) {
    this.setState({
      photoIndex: index
    })
  }

  scrollRight() {
    this.setState({
      photoIndex: this.state.photoIndex + 1
    })
  }

  scrollLeft() {
    this.setState({
      photoIndex: this.state.photoIndex - 1
    })
  }

  scrollUp() {
    let newCarousel = [...this.props.carousel]
    newCarousel.pop();
    newCarousel.unshift(this.props.photos[this.props.frontIdx - 1])

    this.props.decrementIdx(newCarousel);
  }

  scrollDown () {
    let newCarousel = [...this.props.carousel]
    newCarousel.shift();
    newCarousel.push(this.props.photos[this.props.backIdx + 1]);

    this.props.incrementIdx(newCarousel);
  }

  render() {
    return <div className='image-gallery'>
           <Carousel carousel={this.props.carousel}
                     length = {this.props.photos.length}
                     changeImage={this.changeImage.bind(this)}
                     frontIdx = {this.props.frontIdx}
                     backIdx = {this.props.backIdx}
                     index={this.state.photoIndex}
                     scrollUp={this.scrollUp.bind(this)}
                     scrollDown={this.scrollDown.bind(this)}/>
             {this.state.view === 'expanded' && <ExpandedView />}
             <DefaultView photos={this.props.photos || []}
                          index={this.state.photoIndex}
                          scrollRight={this.scrollRight.bind(this)}
                          scrollLeft={this.scrollLeft.bind(this)}/>
           </div>
  }
}

export default ImageGallery