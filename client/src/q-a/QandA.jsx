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
    this.setState({searchTerm: term});
  }


  render() {
    return (
      <div onClick={(e) => {this.props.postInteraction(e, 'QandA')}} className='QA-container'>
        <SearchBar searchQuestions={this.searchQuestions} />
        <QandAList qaList={this.state.qaList} getQAList={this.getQAList} searchTerm={this.state.searchTerm} openModalFunc={this.openModalFunc} productData={this.props.productData}/>
        {this.state.openModal && <Modal1 closeModal={this.openModalFunc} product_id={this.props.product_id} getQAList={this.getQAList} productData={this.props.productData}/>}
      </div>
    )
  }


}

export default QandA;
