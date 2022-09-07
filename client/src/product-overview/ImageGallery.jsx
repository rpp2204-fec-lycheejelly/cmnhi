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

  scrollUp(carousel) {
    carousel.scrollForward(this.state.photoIndex);
  }

  scrollDown(carousel) {
    carousel.scrollBackward(this.state.photoIndex);
  }

  render() {
    return <div className='image-gallery'>
           <Carousel carousel={this.props.style.photos || []}
                     changeImage={this.changeImage.bind(this)}
                     index={this.state.photoIndex}
                     scrollUp={this.scrollUp.bind(this)}
                     scrollDown={this.scrollDown.bind(this)}/>
             {this.state.view === 'expanded' && <ExpandedView />}
             <DefaultView photos={this.props.style.photos || []}
                          index={this.state.photoIndex}
                          scrollRight={this.scrollRight.bind(this)}
                          scrollLeft={this.scrollLeft.bind(this)}/>
           </div>
  }
}

export default ImageGallery