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
    this.setState(state => ({loadMoreAns: !state.loadMoreAns}))
  }


  render() {
    var answersList = this.props.answersList;
    var sellerList = [];
    var nonSellerList = [];
    //step1: sort answerList:
    //step1-1: classify answerList into sellerList and non-seller List
    answersList.map(eachAnswer => {
      // answerer is the seller:
      if (eachAnswer['answerer_name'].toLowerCase() === 'seller') {
        sellerList.push(eachAnswer);

      } else {
        // non-seller:
        nonSellerList.push(eachAnswer);
      }
    })
    //step1-2: sort for both resp.
    sellerList = sellerList.sort((a, b) => b.helpfulness - a.helpfulness);
    nonSellerList = nonSellerList.sort((a, b) => b.helpfulness - a.helpfulness);
    //step1-3: concat
    answersList = sellerList.concat(nonSellerList);


    //step2: then rendering
    if (answersList.length > 2) {
      return (
        <div>
          {answersList.slice(0, 2).map(eachAnswer => {
            return <EachAnswer key={eachAnswer['id']} answerId={eachAnswer['id']} eachAnswer={eachAnswer}/>})}
          {this.state.loadMoreAns ?
          answersList.slice(2).map(eachAnswer => {return <EachAnswer key={eachAnswer['id']} answerId={eachAnswer['id']} eachAnswer={eachAnswer}/>}) :
          null
          }
          <div className='QA-loadMoreAns' onClick={() => this.loadMoreAnswers()}>{this.state.loadMoreAns ? 'Collapse answers' : 'See more answers'}</div>
        </div>
      )
    } else {
      return (
        <div>
          {answersList.map(eachAnswer => {return <EachAnswer key={eachAnswer['id']} answerId={eachAnswer['id']} eachAnswer={eachAnswer}/>})}
        </div>
      )
    }
  }
}


export default AnswersList;


// PREVIOUS CODE:
// class AnswersList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loadMoreAns: false
//     }
//     this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
//   }

//   loadMoreAnswers() {
//     this.setState(state => ({loadMoreAns: !state.loadMoreAns}))
//   }


//   render() {
//     var answersList = this.props.answersList;
//     if (answersList.length > 2) {
//       return (
//         <div>
//           {answersList.slice(0, 2).map(eachAnswer => {
//             return <EachAnswer key={eachAnswer['id']} answerId={eachAnswer['id']} eachAnswer={eachAnswer}/>})}
//           {this.state.loadMoreAns ?
//           answersList.slice(2).map(eachAnswer => {return <EachAnswer key={eachAnswer['id']} answerId={eachAnswer['id']} eachAnswer={eachAnswer}/>}) :
//           null
//           }
//           <div className='QA-loadMoreAns' onClick={() => this.loadMoreAnswers()}>{this.state.loadMoreAns ? 'Collapse answers' : 'See more answers'}</div>
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           {answersList.map(eachAnswer => {return <EachAnswer key={eachAnswer['id']} answerId={eachAnswer['id']} eachAnswer={eachAnswer}/>})}
//         </div>
//       )
//     }
//   }
// }