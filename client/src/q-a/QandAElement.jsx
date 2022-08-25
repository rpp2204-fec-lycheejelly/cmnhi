import React from 'react';

class QandAElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('qa', this.props.qa);
    return (
      <div>Hiii</div>
    )
  }
}

export default QandAElement;