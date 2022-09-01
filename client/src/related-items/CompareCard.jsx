import React from 'react';
import '../assets/styles.css';
import starImage from '../assets/star.png';
import starButton from '../assets/unclicked-star.png';
import Modal from './Modal.jsx';


class CompareCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showModal: false,
      clickedProduct: ''
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

  showModal(e) {
    if (!this.state.showModal) {
      this.setState({
        showModal: true,
        clickedProduct: e.target.name
      });
    } else {
      this.setState({
        showModal: false
      })
    }
  }

  render () {
    console.log(this.props.current);
    if (this.state.products) {
      return (
        <div id="related">
        {this.state.products.map((item, id) => {
          let ratings = item.ratings;
          let total = 0;
          let count = 0;
          for (var key in ratings) {
            total += ratings[key] * key;
            count += Number(ratings[key]);
          }
          console.log(total);
          console.log(count);
          let styles = item.styles;
          let price = 0;
          let url = '';
          styles.forEach(style => {
            if (style['default?'] === true) {
              price = style['sale_price'] !== null ? style['sale_price'] : style['original_price'];
              url = style['photos'][0]['thumbnail_url'];
            }
          })
          return (
            <div id="items" key={id}>
              <img id="thumbnail" src={url || item['styles'][0]['photos'][0]['thumbnail_url']}/>
              <input type="image" src={starButton} name={item.id} id="star-button" onClick={e => this.showModal(e)}/>
              <Modal product={this.props.current} compare={this.state.clickedProduct} clicked={this.state.showModal} exit={this.showModal}/>
              <p>{item.category}</p>
              <p><strong>{item.name}</strong></p>
              <p><em>{item.slogan}</em></p>
              <p>${price || item['default_price']}</p>
              <p>Rating: {total / count}</p>
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