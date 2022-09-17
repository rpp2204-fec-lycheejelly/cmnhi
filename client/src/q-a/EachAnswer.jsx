import React from 'react';
import axios from 'axios';
import Moment from 'moment';

class EachAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.eachAnswer.helpfulness,
      voted: null,
      reported: false,
    }
    this.plusOne = this.plusOne.bind(this);
    this.answerHelpfulness = this.answerHelpfulness.bind(this);
    this.answerReport = this.answerReport.bind(this);
    this.report = this.report.bind(this);
  }

  plusOne() {
    this.setState({
      helpfulness: this.state.helpfulness + 1,
      voted: true
    })
  }

  handleClick() {
    this.setState({voted: true});
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

  report() {
    this.setState({reported: true});
  }

  answerReport() {
    if (!this.state.reported) {
      return axios.put(`/qa/answers/:answer_id/report`, {
        answer_id: this.props.answerId
      })
      .then(res => {
        console.log('response for reporting answer', res);
        this.report();
      })
      .catch(err => {
        console.log('error for answerReport', err);
      })
    }
  }

  render() {
    var answer = this.props.eachAnswer;
    return (
      <div className='QA-eachAnswer'>
        <div className='QA-answerBody'>{answer['body']}</div>
        <div className='QA-answerPhotos'>
        {answer['photos'].map((photo, index) => {
          return <img className='QA-img' key={index} src={photo} alt='' />})}
        </div>
        <div className='QA-questionInfo-Combination'>
          <span>
            <span className='QA-questionInfo'>by {answer['answerer_name'].toLowerCase() === 'seller' ? <b>Seller</b> : answer['answerer_name']} |</span>
            <span className='QA-questionInfo'>{Moment(answer['date']).format('MMM DD, YYYY')} |</span>
            <span className='QA-questionInfo'>Helpful?</span>
            <span className='QA-yes' disabled={this.state.voted === true} onClick={() => this.answerHelpfulness()}>Yes</span>
            <span className='QA-helpfulness'>({this.state.helpfulness}) |</span>
            <span className='QA-A-report' onClick={this.answerReport}>{this.state.reported ? 'Reported' : 'Report'}</span>
          </span>
        </div>
      </div>
    )
  }
}

export default EachAnswer;