import React from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import Carousel from './Carousel.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidUpdate(prevProps) {
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

  scrollDown() {
    let newCarousel = [...this.props.carousel]
    newCarousel.pop();
    newCarousel.unshift(this.props.photos[this.props.frontIdx - 1])

    this.props.scrollDown(newCarousel);
  }

  scrollUp() {
    let newCarousel = [...this.props.carousel]
    newCarousel.shift();
    newCarousel.push(this.props.photos[this.props.backIdx]);

    this.props.scrollUp(newCarousel);
  }

  render() {
    return <div className={this.props.view === 'expanded' ? 'expanded-view' : 'image-gallery'}>
           <Carousel carousel={this.props.carousel}
                     length = {this.props.photos.length}
                     changeImage={this.changeImage.bind(this)}
                     frontIdx = {this.props.frontIdx}
                     backIdx = {this.props.backIdx}
                     index={this.props.mainIdx}
                     scrollDown={this.scrollDown.bind(this)}
                     scrollUp={this.scrollUp.bind(this)}/>
             {this.props.view === 'expanded' &&
               <ExpandedView carousel={this.props.carousel || []}
                             photos={this.props.photos || []}
                             index={this.props.mainIdx}
                             matcher={this.props.matcher}
                             scrollRight={this.props.scrollRight}
                             scrollLeft={this.props.scrollLeft}
                             changeView={this.props.changeView}/>}

             {this.props.view === 'default' &&
              <DefaultView carousel={this.props.carousel || []}
                            photos={this.props.photos || []}
                            index={this.props.mainIdx}
                            matcher={this.props.matcher}
                            scrollRight={this.props.scrollRight}
                            scrollLeft={this.props.scrollLeft}
                            changeView={this.props.changeView}/>}
           </div>
  }
}

export default ImageGallery