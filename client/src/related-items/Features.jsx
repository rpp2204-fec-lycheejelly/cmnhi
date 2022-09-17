import React from 'react';

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftFeatures: [],
      bothFeatures: [],
      rightFeatures: []
    }
  }

  componentDidMount() {
    let features1 = this.props.features1;
    let features2 = this.props.features2;
    let left = [];
    let both = [];
    let right = [];
    features1.forEach(feature => {
      let combine = feature.value + ' ' + feature.feature;
      left.push(combine);
    });
    features2.forEach(feature2 => {
      let combine2 = feature2.value + ' ' + feature2.feature;
      let index = left.indexOf(combine2)
      if (index !== -1) {
        both.push(combine2);
        left.splice(index, 1);
      } else {
        right.push(combine2);
      }
    })
    this.setState({
      leftFeatures: left,
      bothFeatures: both,
      rightFeatures: right
    })
  }

  render () {
    console.log(this.state);
    return (
      <div className="features">
        {this.state.leftFeatures.map((des, id) => {
          return (
            <p key={id}><b>&#10003;</b> {des}</p>
          )
        })}
        {this.state.bothFeatures.map((des2, id) => {
          return (
            <p key={id}><b>&#10003;</b> {des2} <b>&#10003;</b></p>
          )
        })}
        {this.state.rightFeatures.map((des3, id) => {
          return (
            <p key={id}>{des3} <b>&#10003;</b></p>
          )
        })}
      </div>
    )
  }
}

export default Features;