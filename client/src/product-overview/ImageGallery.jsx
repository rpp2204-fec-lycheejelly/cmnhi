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
      carousel: []
    }
  }

  componentDidUpdate() {
    let tempPhotos = [...this.props.photos];

    if(!this.state.carousel.length) {
      this.setState({
        carousel: tempPhotos.splice(0, 7)
      })
    } else {
      if (this.state.carousel[0].url !== this.props.photos[0].url) {
        this.setState({
          carousel: tempPhotos.splice(0, 7)
        })
      }
      // console.log('State', this.state.carousel[0].url !== this.props.photos[0].url)
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

  render() {
    return <div className='image-gallery'>
           <Carousel carousel={this.state.carousel}
                     changeImage={this.changeImage.bind(this)}
                     index={this.state.photoIndex}/>
             {this.state.view === 'expanded' && <ExpandedView />}
             <DefaultView photos={this.props.photos || []}
                          index={this.state.photoIndex}
                          scrollRight={this.scrollRight.bind(this)}
                          scrollLeft={this.scrollLeft.bind(this)}/>
           </div>
  }
}

export default ImageGallery