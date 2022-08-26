import React from 'react';
import CompareCard from './CompareCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <p>Related Products</p>
        <CompareCard/>
      </>
    )
  }
}
export default RelatedProducts