import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({

    })
  }

  render() {
    return (
      <div>
       <RelatedProducts />
       <YourOutfit />
      </div>
    )
  }
}
export default Related



