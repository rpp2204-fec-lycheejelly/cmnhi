import React from 'react';
import AnswersList from './AnswersList.jsx';
import Modal2 from './Modal2.jsx';


class QandAElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.qa.question_helpfulness,
      openModal: false
    }
    this.plusOne = this.plusOne.bind(this);
    this.openModalFunc = this.openModalFunc.bind(this);
  }

  plusOne(e) {
    this.setState((state) => {
      return {helpfulness: state.helpfulness + 1}
    })
  }


  openModalFunc() {
    this.setState({openModal: !this.state.openModal});
  }


  render() {
    var qa = this.props.qa; // one question and the corresponding answer list
    return (
      <div>
        {/* one question */}
        <div className='QA-Q' data-testid={qa.question_id}>Q: {qa.question_body}
          <span className='QA-4in1'>
            <span className='QA-helpful-text'>Helpful?</span>
            <span className='QA-yes' onClick={() => this.plusOne()}>yes</span>
            <span className='QA-helpfulness'>({this.state.helpfulness}) |</span>
            <span className='QA-addAnswer' onClick={() => this.openModalFunc()}>Add Answer</span>
          </span>
            {this.state.openModal && <Modal2 closeModal={this.openModalFunc} questionBody={qa.question_body} questionId={qa.question_id}/>}
        </div>
        {/* corresponding answer list */}
        <div>
          <span>A: </span>
          <AnswersList answersList={Object.values(qa.answers)}/>
        </div>
      </div>
    )
  }

}

export default QandAElement;