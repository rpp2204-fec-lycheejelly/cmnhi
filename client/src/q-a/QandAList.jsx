import React from 'react';
import '../assets/styles.css';

const QandAList = (props) => {
  var newList = props.qaList.slice(0,2);
  return (
    <div className='QandAList'>
    <h4> QandAList Component </h4>
    <div>
      {newList.map(qa => {
      return (
        <div key={qa.question_id}>
        <div >Q: {qa.question_body + 'Helpful?' + 'Yes (' + qa.question_helpfulness + ')'} </div>
        <div >A: {qa.answers[Object.keys(qa.answers)[0]]['body'] }</div>
        <div>
          <span className='QA-questionInfo'>by User{Object.keys(qa.answers)[0] + '-' + qa.answers[Object.keys(qa.answers)[0]]['answerer_name']}</span>
          <span className='QA-questionInfo'>{qa.answers[Object.keys(qa.answers)[0]]['date']}</span>
          <span className='QA-questionInfo'>Helpful?
                <span className='QA-yes'>Yes</span>
                ({qa.answers[Object.keys(qa.answers)[0]]['helpfulness']})
          </span>
        </div>
        <div>**********************************************************</div>
        </div>
      )
      })}
    </div>
    </div>
  )
}

export default QandAList;