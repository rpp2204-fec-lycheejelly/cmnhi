import React from 'react';
import QandAElement from './QandAElement.jsx';

class QandAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadMoreQues: false
    }
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
  }

  loadMoreQuestions() {
    this.setState(state => ({loadMoreQues: !state.loadMoreQues}));
  }


  render() {
    var qaList = this.props.qaList;
    if (qaList.length > 2) {
      return (
        <div>
          {qaList.slice(0, 2).map(qa => {return <QandAElement key={qa.question_id} qa={qa}/>})}
          {this.state.loadMoreQues ?
          qaList.slice(2).map(qa => {return <QandAElement key={qa.question_id} qa={qa}/>}) :
          null
          }
          <button className='QA-loadMoreQues' onClick={() => this.loadMoreQuestions()}>{this.state.loadMoreQues ? null : 'More Answered Questions'}</button>
        </div>
      )
    } else {
      <div>
        {qaList.map(qa => {return <QandAElement key={qa.question_id} qa={qa}/>})}
      </div>
    }
  }
}

export default QandAList;
