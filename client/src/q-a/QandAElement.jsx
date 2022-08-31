import React from 'react';
import AnswersList from './AnswersList.jsx';


class QandAElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: this.props.qa.question_helpfulness
    }
    this.plusOne = this.plusOne.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  plusOne(e) {
    console.log('will plus 1 for the helpfulness');
    this.setState((state) => {
      return {helpfulness: state.helpfulness + 1}
    })
  }

  addAnswer(e) {
    console.log('add answer for this question');
  }


  render() {
    var qa = this.props.qa; // one question and the corresponding answer list
    console.log('qa', qa);
    return (
      <div>
        {/* one question */}
        <div className='QA-Q' data-testid={qa.question_id}>Q: {qa.question_body}
          <span className='QA-4in1'>
            <span className='QA-helpful-text'>Helpful?</span>
            <span className='QA-yes' onClick={() => this.plusOne()}>yes</span>
            <span className='QA-helpfulness'>({this.state.helpfulness}) |</span>
            <span className='QA-addAnswer' onClick={() => this.addAnswer()}>Add Answer</span>
          </span>
        </div>
        {/* corresponding answer list */}
        <div>
          <AnswersList answersList={Object.values(qa.answers)}/>
        </div>
      </div>
    )
  }




  // render() {

  //   var qa = this.props.qa;

  //   return (
  //       <div>
  //         <div className='QA-Q' data-testid={qa.question_id}>Q: {qa.question_body}
  //         <span className='QA-4in1'>
  //           <span className='QA-helpful-text'>Helpful?</span>
  //           <span className='QA-yes' onClick={() => this.plusOne()}>yes</span>
  //           <span className='QA-helpfulness'>({this.state.helpfulness}) |</span>
  //           <span className='QA-addAnswer' onClick={() => this.addAnswer()}>Add Answer</span>
  //         </span>
  //         </div>
  //         <div className='QA-A'>
  //           A: { Object.keys(qa.answers).length > 2
  //             ? Object.keys(qa.answers).slice(0, 2).map(id => {
  //               return(
  //                 <div>
  //                   <div>{qa.answers[id]['body']}</div>
  //                   <img className='QA-img' src={qa.answers[id]['photos'][0]} />
  //                   <div>
  //                     <span className='QA-questionInfo'>by User{id + '-' + qa.answers[id]['answerer_name']}</span>
  //                     <span className='QA-questionInfo'>{qa.answers[id]['date']}</span>
  //                     <span className='QA-questionInfo'>Helpful?</span>
  //                     <span className='QA-helpfulness'>
  //                     <span className='QA-yes' onClick={() => this.plusOne()}>yes</span>
  //                       ({qa.answers[id]['helpfulness']})
  //                     </span>
  //                   </div>
  //                 </div>
  //               )
  //             })
  //             : Object.keys(qa.answers).map(id => {
  //               return (
  //                 <div>
  //                 <div>{qa.answers[id]['body']}</div>
  //                 <img className='QA-img' src={qa.answers[id]['photos'][0]} />
  //                 <div>
  //                   <span className='QA-questionInfo'>by User{id + '-' + qa.answers[id]['answerer_name']}</span>
  //                   <span className='QA-questionInfo'>{qa.answers[id]['date']}</span>
  //                   <span className='QA-questionInfo'>Helpful?</span>
  //                   <span className='QA-helpfulness'>
  //                   <span className='QA-yes' onClick={() => this.plusOne()}>yes</span>
  //                     ({qa.answers[id]['helpfulness']})
  //                   </span>
  //                 </div>
  //               </div>
  //               )
  //             })
  //           }
  //         </div>
  //         <div className='QA-loadMoreAns' onClick={() => this.loadMoreAnswers()}>Load More Answers</div>
  //         <div>**********************************************************</div>

  //       </div>

  //   )
  // }


}

export default QandAElement;