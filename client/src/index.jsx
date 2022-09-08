import React from 'react';
import ReactDOM from 'react-dom';
import Product from './product-overview/Product.jsx';
import Related from './related-items/Related.jsx';
import QandA from './q-a/QandA.jsx';
import styles from './assets/styles.css';
import comnhi from './assets/comnhi.png';
// import Ratings from './ratings-reviews/Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_id: window.location.pathname.slice(1) || '71701'
    }
  }

  //How to append product ID onto url?

  render () {
    return (
      <div>
        <img id="logo" src={comnhi} alt="company-logo"></img>
        <Product product_id={this.state.product_id}/>
        <Related product_id={this.state.product_id}/>
        <QandA product_id={this.state.product_id}/>
        {/*<Ratings /> */}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;