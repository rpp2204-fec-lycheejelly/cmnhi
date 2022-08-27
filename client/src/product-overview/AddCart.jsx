import React from 'react';

class AddCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      confirmation: false,
    }
  }

  updateSku(e) {
    this.setState({
      confirmation: false
    })

    this.props.updateSku(e.target.value)
  }


  updateCount(e) {
    this.setState({
      count: e.target.value
    })
  }

  addToBag(e) {
    e.preventDefault();

    if (!this.props.sku) {
      this.setState({
        confirmation: true
      })
    } else {
      this.props.add(this.state.count);
    }
  }

  render() {
    return <div className='selector-container'>
            {this.state.confirmation && <p className="size-guard">Please select size.</p>}
            <select className="selectors size-selector" onChange={this.updateSku.bind(this)}>

              {!this.props.sku && <option selected>Select Size</option>}

              {Object.keys(this.props.skus).map((key, i) => {
                if (this.props.skus[key].quantity > 0) {
                  return <option key={i} value={key}>{this.props.skus[key].size}</option>
                }
              })}

            </select>

            <select className="selectors" disabled={!this.props.sku} onChange={this.updateCount.bind(this)}>
              {!this.props.sku && <option> - </option>}
              {this.props.sku && Array(this.props.skus[this.props.sku].quantity)
                                      .fill(1)
                                      .slice(0, 15)
                                      .map((x, i) => {
                                        return <option key={i}>{i + 1}</option>
                                      })}
            </select>
            <div>
              <button className="add-to-cart" onClick={this.addToBag.bind(this)}>Add To Bag</button>
              <button className="add-to-outfit">&#9734;</button>
            </div>
          </div>
  }
}

export default AddCart