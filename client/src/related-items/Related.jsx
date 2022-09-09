import React from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      relatedProducts: [],
      relatedDetails: [],
      outfit: [],
      current: {}
    })
  }

  componentDidMount() {
    let one = '/products/' + this.props.product_id;
    let two = '/products/' + this.props.product_id + '/related';

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);


    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
      const responseOne = responses[0].data;
      const responseTwo = responses[1].data;
      this.setState({
        relatedProducts: responseTwo,
        current: responseOne
      })
      // use/access the results
    })).catch(errors => {
      // react on errors.
      console.log(errors);
    })
  }

  render() {
    return (
      <div>
       <RelatedProducts products={this.state.relatedProducts} current={this.state.current}/>
       <YourOutfit />
      </div>
    )
  }
}
export default Related



