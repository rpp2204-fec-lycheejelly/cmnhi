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
      clickedProduct: {},
      leftClick: false,
      rightClick: true,
      fourProds: [],
      first: 0,
      last: 4
    }
    this.showModal = this.showModal.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.related.length !== prevProps.related.length) {
      this.setState({
        products: this.props.related,
        fourProds: this.props.related.slice(this.state.first, this.state.last)
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

  plusSlides(n) {
    console.log('Click');
    var newFirst = this.state.first + n;
    var newLast = this.state.last + n;
    if ((n > 0) && newLast < this.state.products.length) {
      this.setState({
        first: newFirst,
        last: newLast,
        fourProds: this.props.related.slice(newFirst, newLast),
        leftClick: true,
        rightClick: true
      })
    } else if (n > 0) {
      this.setState({
        first: newFirst,
        last: newLast,
        fourProds: this.props.related.slice(newFirst, newLast),
        leftClick: true,
        rightClick: false
      })
    } else if ((n < 0) && newFirst > 0) {
      this.setState({
        first: newFirst,
        last: newLast,
        fourProds: this.props.related.slice(newFirst, newLast),
        leftClick: true,
        rightClick: true
      })
    } else {
      this.setState({
        first: newFirst,
        last: newLast,
        fourProds: this.props.related.slice(newFirst, newLast),
        leftClick: false,
        rightClick: true
      })
    }
  }

  render () {
    if (this.state.products) {
      console.log("first four", this.state.fourProds);
      return (
        <div className="related-carousel" id="related">
          {this.state.leftClick === true ? <a className="prev" onClick={()=> this.plusSlides(-1)}>&#x00AB;</a> : <a className="prev" style={{visibility:'hidden'}}>&#x00AB;</a>}
        {
          this.state.fourProds.map((item, id) => {
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
        {this.state.rightClick === true ? <a className="next" onClick={() => this.plusSlides(1)}>&#x00BB;</a> : <a className="next" style={{visibility:'hidden'}}>&#x00BB;</a>}
        </div>
        // </div>
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