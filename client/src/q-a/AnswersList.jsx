import React from 'react';
import EachAnswer from './EachAnswer.jsx';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
  }

  loadMoreAnswers() {
    console.log('load more answers!!!');
  }


  render() {
    // console.log('answersList', this.props.answersList); // could pass answersList correctly from QandAElement
    var answersList = this.props.answersList;

    if (answersList.length > 2) {
      // console.log('greater than 2'); // get into this condition correctly
      // console.log(answersList.slice(0, 2)); // slice correctly
      return (
        <div>
          {answersList.slice(0, 2).map(eachAnswer => {return <EachAnswer eachAnswer={eachAnswer}/>})}
          {/* <div className='QA-loadMoreAns' onClick={() => this.loadMoreAnswers()}>Load More Answers</div> */}
        </div>
      )
    } else {
      // console.log('less than or equal to 2'); // get into this condition correctly
    }
  }
}


export default AnswersList;