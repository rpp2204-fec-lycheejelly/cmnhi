import React from 'react';

class EachAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.eachAnswer.helpfulness
    }
    this.plusOne = this.plusOne.bind(this);
  }

  plusOne(e) {
    this.setState((state) => {
      return {helpfulness: state.helpfulness + 1}
    })
  }

  render() {
    var answer = this.props.eachAnswer;
    return (
      <div>
        <div>{answer['body']}</div>
        <div>
        {answer['photos'].map(photo => { return <img className='QA-img' src={photo} />})}
        </div>
        <div>
          <span className='QA-questionInfo'>by User{answer['id'] + '-' + answer['answerer_name']}</span>
          <span className='QA-questionInfo'>{answer['date']}</span>
          <span className='QA-questionInfo'>Helpful?</span>
          <span className='QA-yes' onClick={() => this.plusOne()}>yes</span>
          <span className='QA-helpfulness'>({this.state.helpfulness})</span>
        </div>
      </div>
    )
  }
}

export default EachAnswer;