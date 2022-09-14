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
      loadQuestionsButton = <button onClick={this.loadMoreQuestions}>More Answered Questions</button>
    }

    if (qaList.length > 2) {
      return (
        <div>
          {qaList.slice(0, this.state.count).map(qa => {return <QandAElement key={qa.question_id} qa={qa} questionId={qa.question_id} getQAList={this.props.getQAList}/>})}
          {loadQuestionsButton}
        </div>
      )
    } else {
      <div>
        {qaList.map(qa => {return <QandAElement key={qa.question_id} qa={qa} questionId={qa.question_id} getQAList={this.props.getQAList}/>})}
      </div>
    }

  }
}

export default QandAList;





// PREVIOUS CODE:
// class QandAList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loadMoreQues: false
//     }
//     this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
//   }

//   loadMoreQuestions() {
//     this.setState(state => ({loadMoreQues: !state.loadMoreQues}));
//   }


//   render() {
//     // var qaList = this.props.qaList;
//     var searchTerm = this.props.searchTerm;

//     var qaList = this.props.qaList.filter(qa => qa.question_body.toLowerCase().includes(searchTerm.toLowerCase()));

//     // if loadMoreQues is true, then make loadQuestionsButton null; if it is false, then make it a button
//     var loadQuestionsButton = null;
//     if (this.state.loadMoreQues === false) {
//       loadQuestionsButton = <button onClick={this.loadMoreQuestions}>More Answered Questions</button>
//     }

//     // console.log('qaList after filtering', qaList)

//     if (qaList.length > 2) {
//       return (
//         <div>
//           {qaList.slice(0, 2).map(qa => {return <QandAElement key={qa.question_id} qa={qa} questionId={qa.question_id} getQAList={this.props.getQAList}/>})}
//           {this.state.loadMoreQues ?
//           qaList.slice(2).map(qa => {return <QandAElement key={qa.question_id} qa={qa} questionId={qa.question_id} getQAList={this.props.getQAList}/>}) :
//           null
//           }
//           {loadQuestionsButton}
//         </div>
//       )
//     } else {
//       <div>
//         {qaList.map(qa => {return <QandAElement key={qa.question_id} qa={qa} questionId={qa.question_id} getQAList={this.props.getQAList}/>})}
//       </div>
//     }

//   }
// }











