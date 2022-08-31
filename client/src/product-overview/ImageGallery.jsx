import React from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';

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

  render() {
    return <div className='image-gallery'>
             <div className='style-carousel'>

                {this.props.style.photos && this.props.style.photos.map((photo, i) => {
                  return <img className={this.state.photoIndex === i ? "carousel-selected" : ""}
                              onClick={() => {this.changeImage(i)}}
                              src={photo.thumbnail_url}></img>
                })}

             </div>
             {this.state.view === 'expanded' && <ExpandedView />}
             <DefaultView style={this.props.style} index={this.state.photoIndex}/>
           </div>
  }
}

export default ImageGallery