import React from 'react';
import SearchBar from './SearchBar.jsx';
import QandAList from './QandAList.jsx';
import MoreAnswers from './MoreAnswers.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';
import axios from 'axios';

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
      console.log('axios GET', response.data.results);
      this.setState({qaList: response.data.results});
      // console.log('what is the this.state.list', this.state.qaList);
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
        <MoreAnswers />
        <div className='row'>
          <div id='column1'>
            <MoreAnsweredQuestions />
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
