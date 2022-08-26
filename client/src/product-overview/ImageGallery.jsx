import React from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'default'
    }
  }

  render() {
    return <div className='image-gallery'>
      {this.state.view === 'expanded' && <ExpandedView />}
      <DefaultView style={this.props.style}/>
    </div>
  }
}

export default ImageGallery