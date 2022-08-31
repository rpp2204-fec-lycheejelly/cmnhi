import React from 'react';
import SearchBar from './SearchBar.jsx';
import QandAList from './QandAList.jsx';
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
    return axios.get('/qa/questions/71701')
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
        <SearchBar placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'/>
        {/* <QandAList qaList={this.state.qaList}/> */}
        <div className='QA-row'>
          <div id='QA-column'>
          <QandAList qaList={this.state.qaList}/>
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
