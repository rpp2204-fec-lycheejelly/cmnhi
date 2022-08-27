import React from 'react';
import '../assets/styles.css';

class CompareCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.related.length !== prevProps.related.length) {
      this.setState({
        products: this.props.related
      })
    }
  }

  render () {
    console.log(this.state.products);
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
              <img src={url || item['styles'][0]['photos'][0]['thumbnail_url']}/>
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