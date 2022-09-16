import React from 'react';
import plusSign from '../assets/plus.png';
import deleteButt from '../assets/delete.png';
import Stars from '../product-overview/Stars.jsx';

class YourOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plusButton: '',
      leftClick: false,
      rightClick: '',
      fourProds: [],
      first: 0,
      last: 4
    }
    this.addOutfit = this.addOutfit.bind(this);
    this.updateButton = this.updateButton.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
    this.updateArrows = this.updateArrows.bind(this);
  }

  componentDidMount() {
    this.updateArrows(0);
  }
  componentDidUpdate(prevProps) {
    this.updateButton(prevProps);
  }

  updateArrows(n) {
    var newFirst = this.state.first + n;
    var newLast = this.state.last + n;
    if (this.props.outfits.length <= 4) {
      this.setState({
        first: newFirst,
        last: newLast,
        fourProds: this.props.outfits.slice(newFirst, newLast),
      })
    } else if ((n > 0) && newLast < this.props.outfits.length) {
      this.setState({
        first: newFirst,
        last: newLast,
        fourProds: this.props.outfits.slice(newFirst, newLast),
        leftClick: true,
        rightClick: true
      })
    } else if (n > 0) {
      this.setState({
        first: newFirst,
        last: newLast,
        fourProds: this.props.outfits.slice(newFirst, newLast),
        leftClick: true,
        rightClick: false
      })
    } else if ((n < 0) && newFirst > 0) {
      this.setState({
        first: newFirst,
        last: newLast,
        fourProds: this.props.outfits.slice(newFirst, newLast),
        leftClick: true,
        rightClick: true
      })
    } else {
      this.setState({
        first: newFirst,
        last: newLast,
        fourProds: this.props.outfits.slice(newFirst, newLast),
        leftClick: false,
        rightClick: true
      })
    }
  }

  updateButton(prevProps) {
    var exists = false;
    //add an if statement for null
    if (!prevProps) {
      prevProps.outfits.forEach(outfit => {
        if (JSON.stringify(outfit) === JSON.stringify(this.props.current)) {
          exists = true;
        }
      });
      if (exists === false && this.props.outfits.length > 4) {
        this.setState({
          plusButton: true,
          rightClick: true,
        })
      } else if (exists === false && this.props.outfits.length <= 4) {
        this.setState({
          plusButton: true,
          fourProds: this.props.outfits.slice(this.state.first, this.state.last)
        })
      }
    }
  }

  addOutfit() {
    this.setState({
      plusButton: false
    }, () => {
      this.props.addOutfit();
    })
  }

  deleteOutfit(id) {
    this.props.deleteOutfit(id);
    if (id === this.props.current.id) {
      this.setState({plusButton: true});
    }
  }

  render () {
    if (!this.props.outfits || this.props.outfits.length === 0) {
        return (
          <div className="related-outfit">
            {this.state.leftClick === true ? <a className="prev" onClick={()=> this.updateArrows(-1)}>&#x00AB;</a> : <a className="prev" style={{visibility:'hidden'}}>&#x00AB;</a>}
            <div className="items">
              <p id="add">Add to Outfit</p>
              <input type="image" src={plusSign} className="plusSign" onClick={this.addOutfit} alt="add to outfit"/>
            </div>
            {this.state.rightClick === true ? <a className="next" onClick={() => this.updateArrows(1)}>&#x00BB;</a> : <a className="next" style={{visibility:'hidden'}}>&#x00BB;</a>}
          </div>
        )
      }
     else {
      return (
        <div className="related-outfit">
          {this.state.leftClick === true ? <a className="prev" onClick={()=> this.updateArrows(-1)}>&#x00AB;</a> : <a className="prev" style={{visibility:'hidden'}}>&#x00AB;</a>}
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
                <img className="related-thumbnail" alt={"image of " + outfit.name} src={url || outfit['styles'][0]['photos'][0]['url']}/>
                <input type="image" src={deleteButt} className="delete-button" alt="comparison" onClick={() => this.deleteOutfit(outfit.id)}/>
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
          {this.state.plusButton === true ? <div className="items"><p id="add">Add to Outfit</p><input type="image" src={plusSign} className="plusSign" onClick={this.addOutfit} alt="add to outfit"/> </div> : <></>}
          {this.state.rightClick === true ? <a className="next" onClick={() => this.updateArrows(1)}>&#x00BB;</a> : <a className="next" style={{visibility:'hidden'}}>&#x00BB;</a>}
        </div>
      )
    }
  }
}

export default YourOutfit