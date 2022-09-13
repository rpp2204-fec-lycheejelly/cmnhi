import React from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import Carousel from './Carousel.jsx';
import ZoomModal from './ZoomModal.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: false,
      zoomModal: false,
      x: 0,
      y: 0,
    }
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

  activateZoom(e) {
    let bound = e.target.getBoundingClientRect()
    if (!this.state.zoom) {
      this.setState({
        zoom: true,
        zoomModal: true,
        x: e.pageX - bound.left,
        y: e.pageY - bound.top
      })
    } else {
      this.setState({
        zoom: false,
        zoomModal: false,
      })
    }
  }

  onEnter (e) {
    console.log(e)

    let bound = e.target.getBoundingClientRect()
      this.setState({
        zoomModal: true,
        x: e.pageX - bound.left,
        y: e.pageY - bound.top
      })
  }

  onLeave () {
    this.setState({
      zoomModal: false
    })
  }

  onMouseMove (e) {
    let bound = e.target.getBoundingClientRect()
    this.setState({
      x: e.pageX - bound.left,
      y: e.pageY - bound.top
    })
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
            {this.state.zoomModal && <ZoomModal xCord={this.state.x}
                                                yCord={this.state.y}
                                                matcher={this.props.matcher}
                                                photos={this.props.photos || []}
                                                index={this.props.mainIdx}/>}
            {!this.state.zoom && <Carousel carousel={this.props.carousel}
                                                length = {this.props.photos.length}
                                                changeImage={this.changeImage.bind(this)}
                                                frontIdx = {this.props.frontIdx}
                                                backIdx = {this.props.backIdx}
                                                index={this.props.mainIdx}
                                                scrollDown={this.scrollDown.bind(this)}
                                                scrollUp={this.scrollUp.bind(this)}/>}
              {this.props.view === 'expanded' &&
                <ExpandedView carousel={this.props.carousel || []}
                              photos={this.props.photos || []}
                              index={this.props.mainIdx}
                              matcher={this.props.matcher}
                              zoom={this.state.zoom}
                              scrollRight={this.props.scrollRight}
                              scrollLeft={this.props.scrollLeft}
                              changeView={this.props.changeView}
                              activateZoom={this.activateZoom.bind(this)}
                              onEnter={this.onEnter.bind(this)}
                              onLeave={this.onLeave.bind(this)}
                              onMouseMove={this.onMouseMove.bind(this)}/>}

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