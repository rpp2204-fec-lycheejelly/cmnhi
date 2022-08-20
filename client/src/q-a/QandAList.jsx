import React from 'react';

const QandAList = (props) => {
  return (
    <div className='QandAList'>
    <h4> QandAList Component </h4>
    <div>
      {props.qaList.map(qa => {
      return (
        <div key={qa.question_id}>
        <div >Q: {qa.question_body + 'Helpful?' + 'Yes (' + qa.question_helpfulness + ')'} </div>
        <div >A: {qa.answers[Object.keys(qa.answers)[0]]['body'] }</div>
        <div>
          by User{Object.keys(qa.answers)[0] + '-' + qa.answers[Object.keys(qa.answers)[0]]['answerer_name']}
          {qa.answers[Object.keys(qa.answers)[0]]['date']}
          Helpful? Yes ({qa.answers[Object.keys(qa.answers)[0]]['helpfulness']})
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
//qa.answers[Object.keys(qa.answers)[0]]['answerer_name']