import React from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import Carousel from './Carousel.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'default'
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
    this.props.changeImage(index)
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
                     index={this.props.mainIdx}
                     scrollUp={this.scrollUp.bind(this)}
                     scrollDown={this.scrollDown.bind(this)}/>
             {this.state.view === 'expanded' && <ExpandedView />}
             <DefaultView carousel={this.props.carousel || []}
                          photos={this.props.photos || []}
                          index={this.props.mainIdx}
                          scrollRight={this.props.scrollRight}
                          scrollLeft={this.props.scrollLeft}/>
           </div>
  }
}

export default ImageGallery