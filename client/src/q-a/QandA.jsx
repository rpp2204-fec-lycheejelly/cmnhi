import React from 'react';
import SearchBar from './SearchBar.jsx';
import QandAList from './QandAList.jsx';
import Modal1 from './Modal1.jsx';
import axios from 'axios';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qaList: [],
      openModal: false
    };
    this.getQAList = this.getQAList.bind(this);
    this.openModalFunc = this.openModalFunc.bind(this);
  }

  componentDidMount() {
    this.getQAList();
  }

  getQAList() {
    // return axios.get(`/qa/questions/${this.props.product_id}`) // I can't use this one now as this product_id doesn't have QA list from api :(
    return axios.get('/qa/questions/71711')
    .then((response) => {
      this.setState({qaList: response.data.results});
      console.log('this.state.qaList', this.state.qaList);
    })
    .catch((error) => {
      console.log('Failed to fetch data', error);
    })
  }

  openModalFunc() {
    this.setState({openModal: !this.state.openModal});
  }


  render() {
    return (
      <div>
        <SearchBar placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'/>
        <QandAList qaList={this.state.qaList}/>
        <button className="openModal1" onClick={() => this.openModalFunc()}>Add a question +</button>
        {this.state.openModal && <Modal1 closeModal={this.openModalFunc} product_id={this.props.product_id}/>}
      </div>
    )
  }
}

export default QandA;
