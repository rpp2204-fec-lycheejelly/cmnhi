import React from 'react';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>AddQuestion Component</h4>
        <button onClick={this.moreAnsQuestions}>Add A QUESTION +</button>
      </div>
    )
  }
}

export default AddQuestion;

