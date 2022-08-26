import React from 'react';
import '../assets/styles.css';

class CompareCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    }
  }

  render () {
    return (
      <div id="related">
        <p>Category</p>
        <p>Product Name</p>
        <p>*****</p>
      </div>
    )
  }
}
export default CompareCard