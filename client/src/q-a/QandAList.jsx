import React from 'react';
import '../assets/styles.css';
import './QandAElement.jsx';

// const QandAList = (props) => {

//   // only choose the top 2 questions to render by default
//   var top2 = props.qaList.slice(0,2);

//   return (
//     <div className='QandAList'>
//     <h4> QandAList Component </h4>
//     <div>
//       {top2.map(qa => {
//         console.log('qa', qa);
//         return (
//         <div key={qa.question_id}>

//           <div>
//             <span className='QA-Q'>Q: {qa.question_body}</span>
//             <span className='QA-helpful-text'>Helpful?</span>
//             <span className='QA-yes'>Yes</span>
//             <span className='QA-helpfulness'>{qa.question_helpfulness}</span>
//           </div>

//           <div>
//             { Object.keys(qa.answers).length > 2 ?
//               Object.keys(qa.answers).slice(0, 2).map(id => {return <div>A: {qa.answers[id]['body']}</div>}) :
//               Object.keys(qa.answers).map(id => {return <div>A: {qa.answers[id]['body']}</div>})}
//           </div>


//           <img className='QA-img' src={qa.answers[Object.keys(qa.answers)[0]]['photos'][0]} />

//           <div>
//             <span className='QA-questionInfo'>by User{Object.keys(qa.answers)[0] + '-' + qa.answers[Object.keys(qa.answers)[0]]['answerer_name']}</span>
//             <span className='QA-questionInfo'>{qa.answers[Object.keys(qa.answers)[0]]['date']}</span>
//             <span className='QA-questionInfo'>Helpful?
//                 <span className='QA-helpfulness'>Yes</span>
//                 ({qa.answers[Object.keys(qa.answers)[0]]['helpfulness']})
//             </span>
//           </div>

//           <div>**********************************************************</div>
//         </div>
//       )
//       })}
//     </div>
//     </div>
//   )
// }



const QandAList = (props) => {

  var qaList = props.qaList;

  return (
    <div className='QandAList'>
      {qaList.map((qa) => {
        return <QandAElement />
      })}
    </div>
  )
}


export default QandAList;





// class QandAList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // var qaList = this.props.qaList;
//     // if the length of qaList is greater than 2, show first 2 & load more answers button
//     // if the length of qaList is less than and equal to 2, show all & load more answers button
//     return (
//       <div>
//         {this.props.qaList.map(qa => {
//           return <QandAElement qa={qa}/>
//         })}
//       </div>
//     )
//   }
// }