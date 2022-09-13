import React from 'react';
import axios from 'axios';

class EachAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.eachAnswer.helpfulness,
      voted: false
    }
    this.plusOne = this.plusOne.bind(this);
    this.answerHelpfulness = this.answerHelpfulness.bind(this);
  }

  plusOne() {
    // this.setState((state) => {
    //   return {helpfulness: state.helpfulness + 1}
    // })
    this.setState({
      helpfulness: this.state.helpfulness + 1,
      voted: true
    })
  }

  answerHelpfulness() {
    if (!this.state.voted) {
      return axios.put('/qa/answers/:answer_id/helpful', {
        answer_id: this.props.answerId
      })
      .then(res => {
        console.log('response for answer helpfulness', res);
        this.plusOne();
      })
      .catch(err => {
        console.log('err for answerHelpfulness', err);
      })
    }
  }

  render() {
    // console.log('answerId', this.props.answerId);
    var answer = this.props.eachAnswer;
    return (
      <div>
        <div>{answer['body']}</div>
        <div>
        {answer['photos'].map((photo, index) => {
          return <img className='QA-img' key={index} src={photo} alt='' />})}
        </div>
        <div>
          <span className='QA-questionInfo'>by User{answer['id'] + '-' + answer['answerer_name']}</span>
          <span className='QA-questionInfo'>{answer['date']}</span>
          <span className='QA-questionInfo'>Helpful?</span>
          {/* <span className='QA-yes' onClick={() => this.plusOne()}>yes</span> */}
          <span className='QA-yes' onClick={() => this.answerHelpfulness()}>yes</span>
          <span className='QA-helpfulness'>({this.state.helpfulness})</span>
        </div>
      </div>
    )
  }
}

export default EachAnswer;