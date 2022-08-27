import React from 'react';

class QandAElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yes: 'yes'
    }
    this.plusOne = this.plusOne.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
  }

  plusOne(e) {
    console.log('will plus 1 for the helpfulness');

  }

  addAnswer(e) {
    console.log('add answer for this question');
  }

  loadMoreAnswers(e) {
    console.log('load more answers');
    // going to load the rest of answers for this question

  }

  render() {

    var qa = this.props.qa;

    return (

        <div>

          <div className='QA-Q' data-testid={qa.question_id}>Q: {qa.question_body}
          <span className='QA-4in1'>
            <span className='QA-helpful-text'>Helpful?</span>
            <span className='QA-yes' onClick={() => this.plusOne()}>{this.state.yes}</span>
            <span className='QA-helpfulness'>({qa.question_helpfulness}) |</span>
            <span className='QA-addAnswer' onClick={() => this.addAnswer()}>Add Answer</span>
          </span>
          </div>
          <div className='QA-A'>
            A: { Object.keys(qa.answers).length > 2
              ? Object.keys(qa.answers).slice(0, 2).map(id => {
                return(
                  <div>
                    <div>{qa.answers[id]['body']}</div>
                    <img className='QA-img' src={qa.answers[id]['photos'][0]} />
                    <div>
                      <span className='QA-questionInfo'>by User{id + '-' + qa.answers[id]['answerer_name']}</span>
                      <span className='QA-questionInfo'>{qa.answers[id]['date']}</span>
                      <span className='QA-questionInfo'>Helpful?</span>
                      <span className='QA-helpfulness'>
                      <span className='QA-yes' onClick={() => this.plusOne()}>{this.state.yes}</span>
                        ({qa.answers[id]['helpfulness']})
                      </span>
                    </div>
                  </div>
                )
              })
              : Object.keys(qa.answers).map(id => {return <div>{qa.answers[id]['body']}</div>})
            }
          </div>
          <div className='QA-loadMoreAns' onClick={() => this.loadMoreAnswers()}>Load More Answers</div>
          <div>**********************************************************</div>

        </div>

    )
  }
}

export default QandAElement;