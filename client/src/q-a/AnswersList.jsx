import React from 'react';
import EachAnswer from './EachAnswer.jsx';


class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadMoreAns: false
    }
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
  }

  loadMoreAnswers() {
    // this.setState({loadMoreAns: !this.state.loadMoreAns});
    this.setState(state => ({loadMoreAns: !state.loadMoreAns}))
  }


  render() {
    var answersList = this.props.answersList;
    if (answersList.length > 2) {
      return (
        <div>
          {answersList.slice(0, 2).map(eachAnswer => {return <EachAnswer eachAnswer={eachAnswer}/>})}
          <div className='QA-loadMoreAns' onClick={() => this.loadMoreAnswers()}>{this.state.loadMoreAns ? 'Collapse answers' : 'See more answers'}</div>
          {this.state.loadMoreAns ?
          answersList.slice(2).map(eachAnswer => {return <EachAnswer eachAnswer={eachAnswer}/>}) :
          null
          }
        </div>
      )
    } else {
      return (
        <div>
          {answersList.map(eachAnswer => {return <EachAnswer eachAnswer={eachAnswer}/>})}
        </div>
      )
    }
  }
}


export default AnswersList;