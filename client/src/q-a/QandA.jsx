import React from 'react';
import SearchBar from './SearchBar.jsx';
import QandAList from './QandAList.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';
import axios from 'axios';
import '../assets/styles.css';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qaList: []
    }

    this.getQAList = this.getQAList.bind(this);
  }

  componentDidMount() {
    this.getQAList();
  }

  getQAList() {
    return axios.get('/qa/questions')
    .then((response) => {
      this.setState({qaList: response.data.results});
    })
    .catch((error) => {
      console.log('Failed to fetch data', error);
    })
  }

  render() {
    return (
      <div>
        <h2>QUESTIONS & ANSWERS</h2>
        <SearchBar placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'/>
        <QandAList qaList={this.state.qaList}/>
        <div className='QA-row'>
          <div id='QA-column'>
            <MoreAnsweredQuestions />
          </div>
          <div id='QA-column'>
            <AddQuestion />
          </div>
        </div>
      </div>
    )
  }
}

export default QandA;
