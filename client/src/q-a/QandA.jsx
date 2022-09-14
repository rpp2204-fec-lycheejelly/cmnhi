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
      searchTerm: '',
      // count: 2,
      // loadMoreQues: true,
    };
    // this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
    this.getQAList = this.getQAList.bind(this);
    this.openModalFunc = this.openModalFunc.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
    // this.sortQandAList = this.sortQandAList.bind(this);
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


  // loadMoreQuestions() {
  //   if (this.state.count >= this.state.qaList.length) {
  //     this.setState({loadMoreQues: false});
  //   } else {
  //     this.setState({count: this.state.count + 2});
  //     this.getQAList();
  //   }
  // }

  // sortQandAList() {
  //   var sortedQAList = [];

  //   this.state.qaList.map(qa => {
  //     var answersList = Object.values(qa.answers);
  //     var sellerList = [];
  //     var nonSellerList = [];
  //     var sortedAnswersList = [];
  //     //step1: sort answerList:
  //     //step1-1: classify answerList into sellerList and non-seller List
  //     answersList.map(eachAnswer => {
  //       // answerer is the seller:
  //       if (eachAnswer['answerer_name'].toLowerCase() === 'seller') {
  //         sellerList.push(eachAnswer);

  //       } else {
  //         // non-seller:
  //         nonSellerList.push(eachAnswer);
  //       }
  //     })
  //     sellerList.sort((a, b) => b.helpfulness - a.helpfulness);
  //     nonSellerList.sort((a, b) => b.helpfulness - a.helpfulness);
  //     sortedAnswersList = sellerList.concat(nonSellerList);

  //   });

  //   this.setState({qaList: sortedQAList}, () => {
  //     this.state.qaList.map((qa,index) => {
  //       if (qa.question_body.toLowerCase().includes(this.state.searchTerm.toLowerCase()) && this.state.searchTerm.length >= 3) {
  //         // this.setState({qaList: this.state.qaList.filter(qa => qa.question_body.toLowerCase().includes(this.state.searchTerm.toLowerCase()))});
  //         this.setState({qaList: this.state.qaList.splice(index, this.state.count)});
  //         return this.state.qaList;
  //       }
  //     })
  //   })

  // }


  searchQuestions(term) {
    this.setState({searchTerm: term});
    // this.state.qaList.map(qa => console.log(qa.question_body));
    // console.log('filtered', filtered);
    // this.setState({qaList: filtered}, () => console.log('current state', this.state.qaList));
    // if (this.state.searchTerm.length >= 3) {
    //   this.setState({qaList: this.sortQandAList(), count: 2})
    //   console.log('fiiltered', this.state.qaList);
    // }

  }


  render() {
    return (
      <div>
        <SearchBar searchQuestions={this.searchQuestions} searchTerm={this.state.searchTerm}/>
        {/* <QandAList qaList={this.state.qaList} getQAList={this.getQAList} loadMoreQuestions={this.loadMoreQuestions} loadMoreQues={this.state.loadMoreQues} count={this.state.count}/> */}
        <QandAList qaList={this.state.qaList} getQAList={this.getQAList} searchTerm={this.state.searchTerm}/>
        <button className="openModal1" onClick={() => this.openModalFunc()}>Add a question +</button>
        {this.state.openModal && <Modal1 closeModal={this.openModalFunc} product_id={this.props.product_id} getQAList={this.getQAList}/>}
      </div>
    )
  }
}

export default QandA;
