import React from 'react';
import QandAElement from './QandAElement.jsx';


class QandAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadMoreQues: true,
      count: 2
    }
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
  }

  loadMoreQuestions() {
    if (this.state.count >= this.props.qaList.length) {
      this.setState({loadMoreQues: false});
    } else {
      this.setState({count: this.state.count + 2});
      this.props.getQAList();
    }
  }


  render() {

    var loadQuestionsButton = null;
    var qaList = this.props.qaList.filter(val => {
      if (this.props.searchTerm === '') {
        return val;
      } else if (this.props.searchTerm.length >= 3 && val.question_body.toLowerCase().includes(this.props.searchTerm.toLowerCase())) {
        return val;
      }
    })

    if (this.state.loadMoreQues) {
      loadQuestionsButton = <button className='loadQuestionsButton' onClick={this.loadMoreQuestions}>MORE ANSWERED QUESTIONS</button>
    }

    if (qaList.length > 2) {
      return (
        <div>
          <div id='QA-QandAList-overflowTest'>
            {qaList.slice(0, this.state.count).map(qa => {return <QandAElement key={qa.question_id} qa={qa} questionId={qa.question_id} getQAList={this.props.getQAList} productData={this.props.productData}/>})}
          </div>
          <div className='QA-two-buttons'>
            {loadQuestionsButton}
            <button className="openModal1" onClick={() => this.props.openModalFunc()}>ADD A QUESTION +</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {qaList.map(qa => {return <QandAElement key={qa.question_id} qa={qa} questionId={qa.question_id} getQAList={this.props.getQAList} productData={this.props.productData}/>})}
        </div>
      )
    }

  }
}

export default QandAList;












