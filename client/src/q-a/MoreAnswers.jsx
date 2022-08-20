import React from 'react';

class MoreAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Load More Answers'
    }
    this.moreAns = this.moreAns.bind(this);
  }

  moreAns(e) {
    console.log('will show more answers');
    // will work on the functionality later
  }

  render() {
    return (
      <div>
       <h4>MoreAnswers Component</h4>
       <div onClick= {() => this.moreAns()}>{this.state.text}</div>
      </div>
    )
  }
}


export default MoreAnswers;