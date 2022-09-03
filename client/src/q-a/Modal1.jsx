import React from 'react';


class Modal1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='QA-modal-1' style={{zIndex: '1000'}}>
        <div className='QA-modalBackground'>
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
              <span>Your Question:</span><br />
              <span><textarea className='QA-1000' maxLength='1000' type='text'></textarea></span><br />
              <span>Your Nickname:</span><br />
              <span><textarea className='QA-60-nickname' maxLength='60' type='text' placeholder='Example: jackson11!'/></span><br />
              <span>For privacy reasons, do not use your full name or email address</span><br />
              <span>Your Email:</span><br />
              <span><textarea className='QA-60-email' maxLength='60' type='text' placeholder='Why did you like the product or not?'/></span><br />
              <span>For authentication reasons, you will not be emailed</span><br />
            </label>
            </div>
            <div className='QA-modalFooter'>
              <button>Cancel</button>
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal1;

