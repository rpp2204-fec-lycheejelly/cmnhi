import React from 'react';
import '../assets/styles.css';
import starImage from '../assets/star.png';
import starButton from '../assets/unclicked-star.png';
import Modal from './Modal.jsx';
import Stars from '../product-overview/Stars.jsx';
import calculateAverage from '../product-overview/lib/calculateAvg.js';



class CompareCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showModal: false,
      clickedProduct: {}
    }
    this.showModal = this.showModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.related.length !== prevProps.related.length) {
      this.setState({
        products: this.props.related
      })
    }
  }

  showModal(data) {
    if (!this.state.showModal) {
      this.setState({
        showModal: true,
        clickedProduct: data
      });
    } else {
      this.setState({
        showModal: false
      })
    }
  }

  render () {
    if (this.state.products) {
      console.log(this.state.products);
      return (
        <div id="related">
        {this.state.products.map((item, id) => {
          let ratings = item.data.ratings;
          let total = 0;
          let count = 0;
          console.log(item.data.features);
          for (var key in ratings) {
            total += ratings[key] * key;
            count += Number(ratings[key]);
          }
          let styles = item.data.styles;
          let price = 0;
          let url = '';
          styles.forEach(style => {
            if (style['default?'] === true) {
              price = style['sale_price'] !== null ? style['sale_price'] : style['original_price'];
              url = style['photos'][0]['url'];
            }
          })
          return (
            <div className="items" key={id}>
              <img className="thumbnail" alt={"image of " + item.data.name} src={url || item.data['styles'][0]['photos'][0]['url']}/>
              <input type="image" src={starButton} className="star-button" onClick={() => this.showModal(item.data)} alt="comparison"/>
              <Modal product={this.props.current} compare={this.state.clickedProduct} clicked={this.state.showModal} exit={this.showModal}/>
              <p>{item.data.category}</p>
              <p><strong>{item.data.name}</strong></p>
              <p><em>{item.data.slogan}</em></p>
              <p>${price || item.data['default_price']}</p>
              <div className="star-cards">
              <Stars reviews={item.data.ratings}/>
              </div>
            </div>
          )
        })}
        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }

  }
}
export default CompareCard