import React from 'react';
import plusSign from '../assets/plus.png';
import Stars from '../product-overview/Stars.jsx';

class YourOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plusButton: false,
      leftClick: false,
      rightClick: true,
      fourProds: [],
      first: 0,
      last: 4
    }
    this.addOutfit = this.addOutfit.bind(this);
    this.updateButton = this.updateButton.bind(this);
  }

  componentDidUpdate(prevProps) {
    this.updateButton(prevProps);
  }

  updateButton(prevProps) {
    var exists = false;
    prevProps.outfits.forEach(outfit => {
      if (JSON.stringify(outfit) === JSON.stringify(this.props.current)) {
        exists = true;
      }
    });
    if (exists === false) {
      this.setState({
        plusButton: true
      })
    }
  }

  addOutfit() {
    this.setState({
      plusButton: false
    }, () => {
      this.props.addOutfit();
    })
  }
  render () {
    if (!this.props.outfits) {
        return (
          <div className="related-outfit">
            <div className="items">
              <input type="image" src={plusSign} className="plusSign" onClick={this.addOutfit} alt="add to outfit"/>
            </div>
          </div>
        )
      }
     else {
      return (
        <div className="related-outfit">
          {this.state.leftClick === true ? <a className="prev" onClick={()=> this.plusSlides(-1)}>&#x00AB;</a> : <a className="prev" style={{visibility:'hidden'}}>&#x00AB;</a>}
          {this.props.outfits.map((outfit, id) => {
            let styles = outfit.styles;
            let price = 0;
            let url = '';
            styles.forEach(style => {
              if (style['default?'] === true) {
                price = style['sale_price'] !== null ? style['sale_price'] : style['original_price'];
                url = style['photos'][0]['url'];
              }
            })
            return (
              <div className="items" key={'yo' + id}>
                <img className="thumbnail" alt={"image of " + outfit.name} src={url || outfit['styles'][0]['photos'][0]['url']}/>
                <p>{outfit.category}</p>
                <p><strong>{outfit.name}</strong></p>
                <p><em>{outfit.slogan}</em></p>
                <p>${price || outfit['default_price']}</p>
                <div className="star-cards">
                <Stars reviews={outfit.ratings}/>
                </div>
              </div>
            )
          })}
          {this.state.plusButton === true ? <div className="items"> <input type="image" src={plusSign} className="plusSign" onClick={this.addOutfit} alt="add to outfit"/> </div> : <></>}
        </div>
      )
    }
  }
}

export default YourOutfit