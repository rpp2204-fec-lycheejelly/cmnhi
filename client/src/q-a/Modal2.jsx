import React from 'react';
import axios from 'axios';
// import {Image} from 'cloudinary-react'


const initialState = {
  yourAnswer: '',
  yourNickName: '',
  yourEmail: '',
  // errorMsg: '',
  images: [],
  loading: false,
  errorMsgEmail: '',
  errorMsgNickName: '',
  errorMsgAnswer: '',
  errorMsgPhoto: ''
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.submitInfo = this.submitInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.validate = this.validate.bind(this);
  }


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  validate = () => {
    let errorMsgEmail = '';
    let errorMsgNickName = '';
    let errorMsgAnswer = '';
    let errorMsgPhoto = '';
    let validateEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;



    if (!this.state.yourAnswer) {
      errorMsgAnswer = 'You must enter your Answer:';
    }

    if (!validateEmail.test(this.state.yourEmail)) {
      errorMsgEmail = 'You must enter the invalid email:';
    }


    if (!this.state.yourNickName) {
      errorMsgNickName = 'You must enter your nickname:';
    }

    if (this.state.images.length === 0) {
      errorMsgPhoto = 'You must upload at least one photo:';
    }


    if (errorMsgEmail || errorMsgNickName || errorMsgAnswer || errorMsgPhoto) {
      if (errorMsgEmail) {
        this.setState({errorMsgEmail});
      }
      if (errorMsgAnswer) {
        this.setState({errorMsgAnswer});
      }
      if (errorMsgNickName) {
        this.setState({errorMsgNickName});
      }
      if (errorMsgPhoto) {
        this.setState({errorMsgPhoto});
      }
      return false;
    }

    return true;
  }

  // validate = () => {
  //   let errorMsg = '';
  //   // will handle the post of photos later as I have to do some research:
  //   if (!this.state.yourEmail.includes('@') || !this.state.yourEmail || !this.state.yourAnswer || !this.state.yourNickName || this.state.images.length === 0) {
  //     errorMsg = 'You must enter the following:';
  //   }

  //   if (errorMsg) {
  //     this.setState({errorMsg});
  //     return false;
  //   }

  //   return true;
  // }


  uploadImage = (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'f6koofaj');
    this.setState({loading: true});

    axios.post("https://api.cloudinary.com/v1_1/dc3r923zh/image/upload", data)
    .then(res => {
      // console.log('res of uploading img', res);
      // console.log('secure_url', res.data.secure_url);
      // this.setState({image: res.data.secure_url, loading: false});
      this.setState({images: this.state.images.concat(res.data.secure_url)});
      // console.log('images', this.state.images);
    })
    .catch(err => {
      console.log('err of uploading img', err);
    })

  }


  // uploadImage = () => {
  //   // console.log(files);
  //   const formData = new FormData();
  //   formData.append("file", this.state.imageSelected);
  //   formData.append('upload_preset', 'f6koofaj');
  //   this.setState({loading: true});

  //   axios.post("https://api.cloudinary.com/v1_1/dc3r923zh/image/upload", formData)
  //   .then(res => {
  //     console.log('res of uploading img', res);
  //   })
  //   .catch(err => {
  //     console.log('err of uploading img', err);
  //   })
  // }


  submitInfo = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    console.log('isValid', isValid);
    if (isValid) {
      axios.post(`/qa/questions/:question_id/answers`, {
        question_id: this.props.questionId,
        body: this.state.yourAnswer,
        name: this.state.yourNickName,
        email: this.state.yourEmail,
        photos: this.state.images
      })
      .then(result => {
        console.log('Modal2-result from the server:', result);
        this.props.getQAList();
      })
      .catch(err => {
        console.log('Modal2-err:', err);
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
              <h3>Submit your Answer</h3>
              <h5>{this.props.productData.name} : {this.props.questionBody}</h5>
            </div>
            <div className='QA-modalBody'>
              <label>
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsgAnswer}</div>
                <div>
                  <span>Your Answer:</span><br />
                  <span><textarea className='QA-1000' maxLength='1000' name='yourAnswer' type='text' value={this.state.yourAnswer} onChange={this.handleChange}></textarea></span><br />
                </div>
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsgNickName}</div>
                <div>
                  <span>Your Nickname:</span><br />
                  <span><textarea className='QA-60-nickname' maxLength='60' name='yourNickName' type='text' placeholder='Example: jack543!' value={this.state.yourNickName} onChange={this.handleChange}/></span><br />
                  <span>For privacy reasons, do not use your full name or email address</span><br />
                </div>
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsgEmail}</div>
                <div>
                  <span>Your Email:</span><br />
                  <span><textarea className='QA-60-email' maxLength='60' name='yourEmail' type='text' placeholder='Example: jack@email.com' value={this.state.yourEmail} onChange={this.handleChange}/></span><br />
                  <span>For authentication reasons, you will not be emailed</span><br />
                </div>

{/* UPLOAD PHOTO: */}
                <div style={{fontSize: 20, color: 'red'}}>{this.state.errorMsgPhoto}</div>
                <div>
                <input type='file' name='file' placeholder='Upload an image' onChange={this.uploadImage} disabled={this.state.images.length >= 5}/><br />
                {this.state.loading && this.state.images.map(imageUrl => <img className='QA-Modal2-thumbnail' key={imageUrl} src={imageUrl} style={{width: '30px'}}/>)}
                {/* {this.state.loading && this.state.images.length <= 5 ? this.state.images.map(imageUrl => <img key={imageUrl} src={imageUrl} style={{width: '30px'}}/>) : undefined} */}
                  {/* <input type='file' name='file' placeholder='Upload an image' onChange={(event) => {this.setState({imageSelected: event.target.files[0]})}}/> */}
                  {/* <button onClick={this.uploadImage}> Upload Image </button>
                  <Image cloudName='dc3r923zh' publicId='https://res.cloudinary.com/dc3r923zh/image/upload/v1662935331/f6koofaj/whtwoz4cn8t3ncif2cks.png'/> */}
                </div>
{/* UPLOAD PHOTO: */}


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

export default Modal2;


// References for uploading images:
// 1. https://www.youtube.com/watch?v=hlYczGvLlDY
// 2. https://www.youtube.com/watch?v=pL8_KfoYyNk
// 3. https://www.youtube.com/watch?v=Y-VgaRwWS3o