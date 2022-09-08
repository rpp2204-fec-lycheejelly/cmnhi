import React from 'react';
import axios from 'axios';

const initialState = {
  yourQuestion: '',
  yourNickName: '',
  yourEmail: '',
  errorMsg: ''
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
    let errorMsg = '';
    if (!this.state.yourEmail.includes('@') || !this.state.yourEmail || !this.state.yourQuestion || !this.state.yourNickName) {
      errorMsg = 'You must enter the following:';
    }

    if (errorMsg) {
      this.setState({errorMsg});
      return false;
    }

    return true;
  }

  submitInfo = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    // console.log('isValid', isValid);
    if (isValid) {
      // console.log('this.state', this.state);

      //HTTP POST Request:
      axios.post(`/qa/questions/${this.props.product_id}`, {
        // axios.post('/qa/questions', {
        question_body: this.state.yourQuestion,
        asker_name: this.state.yourNickName,
        email: this.state.yourEmail,
        product_id: this.props.product_id
      })
      .then(result => {
        console.log('what is the result from the server', result);
        //get
      })
      .catch(err => {
        console.log(err);
      })


      this.setState(initialState);
    }

  }

  render() {
    // console.log('What is this.state: ', this.state);
    // console.log('this.state.yourQuestion', this.state.yourQuestion);
    return (
      <form onSubmit={this.submitInfo}>
        <div className='QA-modal-1' style={{zIndex: '1000'}}>
          <div className='QA-modalContainer'>
            <div className='QA-titleCloseBtn'>
              <button onClick={() => this.props.closeModal()}> X </button>
            </div>
            <div className='QA-modalTitle'>
              <h3>Add Your Question</h3>
              <h5>About the product name(edit later)</h5>
            </div>
            <div className='QA-modalBody'>
              <label>
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsg}</div>
                <div>
                  <span>Your Question:</span><br />
                  <span><textarea className='QA-1000' maxLength='1000' name='yourQuestion' type='text' value={this.state.yourQuestion} onChange={this.handleChange}></textarea></span><br />
                </div>
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsg}</div>
                <div>
                  <span>Your Nickname:</span><br />
                  <span><textarea className='QA-60-nickname' maxLength='60' name='yourNickName' type='text' placeholder='Example: jackson11!' value={this.state.yourNickName} onChange={this.handleChange}/></span><br />
                  <span>For privacy reasons, do not use your full name or email address</span><br />
                </div>
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsg}</div>
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

