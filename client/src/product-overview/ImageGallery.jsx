import React from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import Carousel from './Carousel.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'default',
      photoIndex: 0,
      carousel: [],
      frontIdx: 0,
      backIdx: 6,
    }
  }

  componentDidUpdate() {
    let tempPhotos = [...this.props.photos];

    if(!this.state.carousel.length) {
      this.setState({
        carousel: tempPhotos.splice(0, 7)
      })
    } else {
      if (this.state.carousel[0].url !== this.props.photos[this.state.frontIdx].url) {
        this.setState({
          carousel: tempPhotos.splice(0, 7)
        })
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
    let newCarousel = [...this.state.carousel]

    newCarousel.pop();
    newCarousel.unshift(this.props.photos[this.state.frontIdx - 1])

    this.setState({
      carousel: newCarousel,
      frontIdx: this.state.frontIdx - 1,
      backIdx: this.state.backIdx - 1
    })
  }

  async scrollDown () {
    let newCarousel = [...this.state.carousel]

    newCarousel.shift();
    newCarousel.push(this.props.photos[this.state.backIdx + 1]);

    this.setState({
      carousel: newCarousel,
      frontIdx: this.state.frontIdx + 1,
      backIdx: this.state.backIdx + 1
    })
  }

  render() {
    return <div className='image-gallery'>
           <Carousel carousel={this.state.carousel}
                     length = {this.props.photos.length}
                     changeImage={this.changeImage.bind(this)}
                     frontIdx = {this.state.frontIdx}
                     backIdx = {this.state.backIdx}
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