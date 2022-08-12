import React from 'react';
import ReactDOM from 'react-dom';
import Product from './product-overview/Product.jsx';
import Related from './related-items/Related.jsx';
import QandA from './q-a/QandA.jsx';
import Ratings from './ratings-reviews/Ratings.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <Product />
        <Related />
        <QandA />
        <Ratings />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));