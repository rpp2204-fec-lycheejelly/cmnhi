import React from 'react';
import axios from 'axios';
import exitButton from '../assets/exit-button.png'
import Features from './Features.jsx';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      product1: {},
      product2: {}
    }
    this.showModal = this.showModal.bind(this);
    this.getCompare = this.getCompare.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.clicked !== prevProps.clicked) {
      console.log(this.props);
      this.setState({
        show: this.props.clicked,
        product1: this.props.product,
        product2: this.props.compare
        });
    }
  }

  getCompare() {
    // axios.get('/products/' + this.props.product)
    //   .then((results) => {
    //     this.setState({
    //       product1: results.data
    //     }, () => {
    //       axios.get('/products/' + this.props.compare)
    //         .then((results2) => {
    //           this.setState({
    //             product2: results2
    //           })
    //         })
    //     })
    //   })
  }

  showModal() {
    this.props.exit();
  }

  render () {
    if (this.state.show && this.state.product1) {
      return (
        <div id="modal">
          <p id="comparing">Comparing</p>
          <div id="productCompare">
            <h3 id="productOne">{this.state.product1.name} </h3>
            <h3 id="productTwo">{this.state.product2.name}</h3>
            <div className="break"></div>
              {/* {this.state.product1.features.map((feature, id) => {
                return (
                  <p key={id}><b>&#10003;</b> {feature.value + ' ' + feature.feature}</p>
                )
              })}
              {this.state.product2.features.map((feature2, id) => {
                return (
                  <p key={id}>{feature2.value + ' ' + feature2.feature} <b>&#10003;</b></p>
                )
              })} */}
              <Features features1={this.state.product1.features}
                        features2={this.state.product2.features}/>
          </div>
          <input type="image" src={exitButton} name="exitButton" id="exit-button" onClick={this.showModal}/>
        </div>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }
}