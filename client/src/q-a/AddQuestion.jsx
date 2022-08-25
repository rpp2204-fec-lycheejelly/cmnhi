import React from 'react';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.moreAnsQuestions}>ADD A QUESTION +</button>
      </div>
    )
  }
}

export default AddQuestion;

