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
    this.searchQuestions = this.searchQuestions.bind(this);
  }

  componentDidMount() {
    this.getQAList();
  }



  getQAList() {
    return axios.get(`/qa/questions/${this.props.product_id}`)
    .then((response) => {
      this.setState({qaList: response.data.results});
    })
    .catch((error) => {
      console.log('Failed to fetch data', error);
    })
  }

  openModalFunc() {
    this.setState({openModal: !this.state.openModal});
  }


  searchQuestions(term) {
    console.log('term', term);
    var filtered = this.state.qaList.filter(question => question.question_body.includes(term));
    console.log('filtered', filtered);
    this.setState({qaList: filtered}, () => console.log('current state', this.state.qaList));
  }



  render() {
    return (
      <div>
        <SearchBar searchQuestions={this.searchQuestions}/>
        <QandAList qaList={this.state.qaList} getQAList={this.getQAList}/>
        <button className="openModal1" onClick={() => this.openModalFunc()}>Add a question +</button>
        {this.state.openModal && <Modal1 closeModal={this.openModalFunc} product_id={this.props.product_id} getQAList={this.getQAList}/>}
      </div>
    )
  }
}

export default QandA;
