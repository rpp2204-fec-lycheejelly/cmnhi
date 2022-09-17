// import React from 'react';
// import AnswersList from './AnswersList.jsx';
// import Modal2 from './Modal2.jsx';
// import axios from 'axios';


// class QandAElement extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       helpfulness: this.props.qa.question_helpfulness,
//       openModal: false,
//       voted: false,
//       reported: false
//     }
//     this.plusOne = this.plusOne.bind(this);
//     this.openModalFunc = this.openModalFunc.bind(this);
//     this.questionHelpfulness = this.questionHelpfulness.bind(this);
//     this.questionReport = this.questionReport.bind(this);
//     this.report = this.report.bind(this);
//   }


//   plusOne() {
//     this.setState({
//       helpfulness: this.state.helpfulness + 1,
//       voted: true
//     })
//   }

//   questionHelpfulness() {
//     if (!this.state.voted) {
//       axios.put('/qa/questions/:question_id/helpful', {
//         question_id: this.props.questionId
//       })
//       .then((res) => {
//         console.log('response for question helpfulness', res)
//         this.plusOne();
//       })
//       .catch(err => {
//         console.log(err);
//       })
//     }
//   }


//   report() {
//     this.setState({reported: true});
//   }

//   questionReport() {
//     if (!this.state.reported) {
//       return axios.put(`/qa/questions/:question_id/report`, {
//         question_id: this.props.questionId
//       })
//       .then(res => {
//         this.report();
//       })
//       .catch(err => {
//         console.log('error for questionReport', err);
//       })
//     }
//   }


//   openModalFunc() {
//     this.setState({openModal: !this.state.openModal});
//   }


//   render() {
//     var qa = this.props.qa; // one question and the corresponding answer list
//     return (
//       <div>
//         {/* one question */}
//         <div className='QA-Q' data-testid={qa.question_id}>
//           <span className='QA-question'>Q: {qa.question_body}</span>
//           <span className='QA-4in1'>
//             <span className='QA-helpful-text'>Helpful?</span>
//             <span className='QA-yes' onClick={() => this.questionHelpfulness()}>yes</span>
//             <span className='QA-helpfulness'>({this.state.helpfulness}) |</span>
//             <span className='QA-report' onClick={this.questionReport}> {this.state.reported ? 'Reported' : 'Report'} |</span>
//             <span className='QA-addAnswer' onClick={() => this.openModalFunc()}>Add Answer</span>
//           </span>
//             {this.state.openModal && <Modal2 closeModal={this.openModalFunc} questionBody={qa.question_body} questionId={qa.question_id} getQAList={this.props.getQAList} productData={this.props.productData}/>}
//         </div>
//         {/* corresponding answer list */}
//         <div>
//           <span>A: </span>
//           <AnswersList answersList={Object.values(qa.answers)}/>
//         </div>
//         <span>------------------------------------------------------------------------------------------------------------------------------------------------------------</span>
//       </div>
//     )
//   }

// }

// export default QandAElement;





import React, {useState, useEffect} from 'react';
import AnswersList from './AnswersList.jsx';
import Modal2 from './Modal2.jsx';
import axios from 'axios';


const QandAElement = (props) => {
  const [helpfulness, setHelpfulness] = useState(props.qa.question_helpfulness);
  const [openModal, setOpenModal] = useState(false);
  const [voted, setVoted] = useState(false);
  const [reported, setReported] = useState(false);

  const plusOne = () => {
    setHelpfulness(helpfulness + 1);
    setVoted(true);
  }

  const questionHelpfulness = () => {
    if (!voted) {
      axios.put('/qa/questions/:question_id/helpful', {
        question_id: props.questionId
      })
      .then((res) => {
        console.log('response for question helpfulness', res)
        plusOne();
      })
      .catch(err => {
        console.log(err);
      })
    }
  }


  const report = () => {
    setReported(!reported);
  }

  const questionReport = () => {
    if (!reported) {
      return axios.put(`/qa/questions/:question_id/report`, {
        question_id: props.questionId
      })
      .then(res => {
        report();
      })
      .catch(err => {
        console.log('error for questionReport', err);
      })
    }
  }

  const qa = props.qa; // one question and the corresponding answer list

  const openModalFunc = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className='QA-QandAElement'>
        {/* one question */}
        <div className='QA-Q' data-testid={qa.question_id}>
          <span className='QA-question'>Q: {qa.question_body}</span>
          <span className='QA-4in1'>
            <span className='QA-helpful-text'>Helpful?</span>
            <span className='QA-yes' onClick={() => questionHelpfulness()}>Yes</span>
            <span className='QA-helpfulness'>({helpfulness}) |</span>
            <span className='QA-report' onClick={() => questionReport()}> {reported ? 'Reported' : 'Report'} |</span>
            <span className='QA-addAnswer' onClick={() => openModalFunc()}>Add Answer</span>
          </span>
            {openModal && <Modal2 closeModal={openModalFunc} questionBody={qa.question_body} questionId={qa.question_id} getQAList={props.getQAList} productData={props.productData}/>}
        </div>
        {/* corresponding answer list */}
        <div className='QA-A'>
          <span className='QA-A-letterA'>A:</span>
          <AnswersList answersList={Object.values(qa.answers)}/>
        </div>
      </div>
  )
}


export default QandAElement;