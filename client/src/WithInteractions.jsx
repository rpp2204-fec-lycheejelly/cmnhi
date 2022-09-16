import React from 'react';
import axios from 'axios';

const WithInteractions = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
    }

    postInteraction(e, widgetName) {
      const date = new Date();
      const timestamp = date.toString().slice(0, 24);

      axios.post('/interactions', {
        element: e.target.localName,
        widget: widgetName,
        time: timestamp
      })
      .then(() => {
        console.log('Successful POST to /interactions')
      })
      .catch((error) => {
        console.log('Error POSTING to /interactions')
        throw new Error(error)
      })
    }

    render() {
      return <OriginalComponent postInteraction={this.postInteraction.bind(this)} {...this.props}/>
    }
  }
  return NewComponent;
}

export default WithInteractions;