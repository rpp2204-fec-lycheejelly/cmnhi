import React from 'react';
import QandAElement from './QandAElement.jsx';

const QandAList = (props) => {
  return (
    <div className='QandAList'>
    {props.qaList.map((qa) => {
      return <QandAElement key={qa.question_id} qa={qa}/>
    })}
  </div>
  )
}

export default QandAList;
