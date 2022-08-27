import React from 'react';

class AddCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }
  }

  updateCount(e) {
    this.setState({
      count: e.target.value
    })
  }

  render() {
    return <div>
            <select className="selectors" onChange={this.props.updateSku}>

              {!this.props.sku && <option selected>Select Size</option>}

              {Object.keys(this.props.skus).map((key, i) => {
                if (this.props.skus[key].quantity > 0) {
                  return <option key={i} value={key}>{this.props.skus[key].size}</option>
                }
              })}

            </select>

            <select className="selectors" onChange={this.updateCount.bind(this)}>
              {!this.props.sku && <option> - </option>}
              {this.props.sku && Array(this.props.skus[this.props.sku].quantity)
                                      .fill(1)
                                      .slice(0, 15)
                                      .map((x, i) => {
                                        return <option key={i}>{i + 1}</option>
                                      })}
            </select>
            <div>
              <button className="add-to-cart">Add To Cart</button>
              <button className="add-to-outfit">&#9734;</button>
            </div>
          </div>
  }
}

export default AddCart