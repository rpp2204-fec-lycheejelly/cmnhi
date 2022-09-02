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

  changeImage(index) {
    this.setState({
      photoIndex: index
    })
  }

  onRightArrowClick() {
    this.setState({
      photoIndex: this.state.photoIndex + 1
    })
  }

  onLeftArrowClick() {
    this.setState({
      photoIndex: this.state.photoIndex - 1
    })
  }

  render() {
    return <div className='image-gallery'>
           <Carousel photos={this.props.style.photos || []}
                     changeImage={this.changeImage.bind(this)}
                     index={this.state.photoIndex}/>
             {this.state.view === 'expanded' && <ExpandedView />}
             <DefaultView photos={this.props.style.photos || []}
                          index={this.state.photoIndex}
                          onRightArrowClick={this.onRightArrowClick.bind(this)}
                          onLeftArrowClick={this.onLeftArrowClick.bind(this)}/>
           </div>
  }
}

export default ImageGallery