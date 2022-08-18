import React from 'react';
import SearchBar from './SearchBar.jsx';
import QandAList from './QandAList.jsx';
import MoreAnswers from './MoreAnswers.jsx';
import AddQuestion from './AddQuestion.jsx';

class QandA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>QUESTIONS & ANSWERS</h2>
        <SearchBar placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'/>
        <QandAList />
        <div className='row'>
          <div id='column1'>
            <MoreAnswers />
          </div>
          <div id='column2'>
            <AddQuestion />
          </div>
        </div>
      </div>
    )
  }
}

export default QandA;
