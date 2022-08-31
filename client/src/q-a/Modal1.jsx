import React from 'react';

class Modal1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
            <input maxLength={1000} type='text'/>
          </div>
          <div className='QA-modalFooter'>
            <button>Cancel</button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal1;

