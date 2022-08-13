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
    return <div>
      <h3>Image Gallery</h3>
      {this.state.view === 'expanded' && <ExpandedView />}
      <DefaultView />
    </div>
  }
}

export default ImageGallery