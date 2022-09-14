import React from 'react';
class YourOutfit extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
      return (
        <div className="outfit-carousel" >
          {this.state.leftClick === true ? <a className="prev" onClick={()=> this.plusSlides(-1)}>&#x00AB;</a> : <a className="prev" style={{visibility:'hidden'}}>&#x00AB;</a>}
        {
          this.state.fourProds.map((item, id) => {
          let ratings = item.data.ratings;
          let total = 0;
          let count = 0;
          console.log(item.data.features);
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
      )
    }
}

export default YourOutfit