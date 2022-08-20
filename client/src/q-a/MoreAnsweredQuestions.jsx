import React from 'react';

class MoreAnsweredQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.moreAnsQuestions = this.moreAnsQuestions.bind(this);
  }

  moreAnsQuestions(e) {
    console.log('will show more answered questions');
    // will work on the functionality later
  }

  render() {
    return (
      <div>
       <h4>MoreAnsweredQuestions Component</h4>
       <button onClick={this.moreAnsQuestions}>MORE ANSWERED QUESTIONS</button>
      </div>
    )
  }
}


export default MoreAnsweredQuestions;