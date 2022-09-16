import React from 'react';
import axios from 'axios';

const initialState = {
  yourQuestion: '',
  yourNickName: '',
  yourEmail: '',
  errorMsgEmail: '',
  errorMsgNickName: '',
  errorMsgQuestion: ''
}

class Modal1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.submitInfo = this.submitInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  validate = () => {
    let errorMsgEmail = '';
    let errorMsgNickName = '';
    let errorMsgQuestion = '';
    // https://www.youtube.com/watch?v=QxjAOSUQjP0
    // (name) @ (domain) . (extension) (.again)
    let validateEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;


    if (!this.state.yourQuestion) {
      errorMsgQuestion = 'You must enter your question:';
    }

    if (!validateEmail.test(this.state.yourEmail)) {
      errorMsgEmail = 'You must enter the invalid email:';
    }


    if (!this.state.yourNickName) {
      errorMsgNickName = 'You must enter your nickname:';
    }


    if (errorMsgEmail || errorMsgNickName || errorMsgQuestion) {
      if (errorMsgEmail) {
        this.setState({errorMsgEmail});
      }
      if (errorMsgQuestion) {
        this.setState({errorMsgQuestion});
      }
      if (errorMsgNickName) {
        this.setState({errorMsgNickName});
      }
      return false;
    }

    return true;
  }


  submitInfo = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      axios.post('/qa/questions', {
        body: this.state.yourQuestion,
        name: this.state.yourNickName,
        email: this.state.yourEmail,
        product_id: Number(this.props.product_id)
      })
      .then(result => {
        console.log('Modal1-result from the server:', result);
        this.props.getQAList();
      })
      .catch(err => {
        console.log('Modal1-err:', err);
      })

      this.setState(initialState);
    }

  }

  render() {
    return (
      <form onSubmit={this.submitInfo}>
        <div className='QA-modal-1' style={{zIndex: '1000'}}>
          <div className='QA-modalContainer'>
            <div className='QA-titleCloseBtn'>
              <button onClick={() => this.props.closeModal()}> X </button>
            </div>
            <div className='QA-modalTitle'>
              <h3>Add Your Question</h3>
              <h5>About the {this.props.productData.name}</h5>
            </div>
            <div className='QA-modalBody'>
              <label>
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsgQuestion}</div>
                <div>
                  <span>Your Question:</span><br />
                  <span><textarea className='QA-1000' maxLength='1000' name='yourQuestion' type='text' value={this.state.yourQuestion} onChange={this.handleChange}></textarea></span><br />
                </div>
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsgNickName}</div>
                <div>
                  <span>Your Nickname:</span><br />
                  <span><textarea className='QA-60-nickname' maxLength='60' name='yourNickName' type='text' placeholder='Example: jackson11!' value={this.state.yourNickName} onChange={this.handleChange}/></span><br />
                  <span>For privacy reasons, do not use your full name or email address</span><br />
                </div>
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsgEmail}</div>
                <div>
                  <span>Your Email:</span><br />
                  <span><textarea className='QA-60-email' maxLength='60' name='yourEmail' type='text' placeholder='Why did you like the product or not?' value={this.state.yourEmail} onChange={this.handleChange}/></span><br />
                  <span>For authentication reasons, you will not be emailed</span><br />
                </div>
              </label>
            </div>
            <div className='QA-modalFooter'>
              <input className='QA-modal1-submit' type='submit' value='Submit' />
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default Modal1;


// ref link: https://www.youtube.com/watch?v=FM2RN8rHCTE

