import React from 'react';

class EachAnswer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('eachAnswer', this.props.eachAnswer); // pass down from AnswersList correctly
    return (
      <div>Each Answer</div>
    )
  }
}

export default EachAnswer;