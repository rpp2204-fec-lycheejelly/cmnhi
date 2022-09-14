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
      openModal: false,
      searchTerm: ''
    };
    this.getQAList = this.getQAList.bind(this);
    this.openModalFunc = this.openModalFunc.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
    this.sortQandAList = this.sortQandAList.bind(this);
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


  sortQandAList() {
    var sortedQAList = this.state.qaList;
    sortedQAList.map(qa => {
      var answersList = Object.values(qa.answers);
      var sellerList = [];
      var nonSellerList = [];
      //step1: sort answerList:
      //step1-1: classify answerList into sellerList and non-seller List
      answersList.map(eachAnswer => {
        // answerer is the seller:
        if (eachAnswer['answerer_name'].toLowerCase() === 'seller') {
          sellerList.push(eachAnswer);

        } else {
          // non-seller:
          nonSellerList.push(eachAnswer);
        }
      })
      //step1-2: sort for both resp.
      sellerList = sellerList.sort((a, b) => b.helpfulness - a.helpfulness);
      nonSellerList = nonSellerList.sort((a, b) => b.helpfulness - a.helpfulness);
      //step1-3: concat
      answersList = sellerList.concat(nonSellerList);
      qa['answers'] = answersList;
      return qa;
    })
    this.setState({qaList: sortedQAList});
  }


  openModalFunc() {
    this.setState({openModal: !this.state.openModal});
  }


  searchQuestions(term) {
    console.log('term', term);
    // this.state.qaList.map(qa => console.log(qa.question_body));
    // var filtered = this.state.qaList.filter(question => question.question_body.includes(this.state.searchTerm));
    // console.log('filtered', filtered);
    // this.setState({qaList: filtered}, () => console.log('current state', this.state.qaList));
  }


  render() {
    return (
      <div>
        <SearchBar searchQuestions={this.searchQuestions} />
        <QandAList qaList={this.state.qaList} getQAList={this.getQAList} />
        <button className="openModal1" onClick={() => this.openModalFunc()}>Add a question +</button>
        {this.state.openModal && <Modal1 closeModal={this.openModalFunc} product_id={this.props.product_id} getQAList={this.getQAList}/>}
      </div>
    )
  }
}

export default QandA;
