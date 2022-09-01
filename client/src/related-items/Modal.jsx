import React from 'react';
import exitButton from '../assets/exit-button.png'

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.clicked !== prevProps.clicked) {
      this.setState({
        show: this.props.clicked
      })
    }
  }

  showModal() {
    this.props.exit();
  }

  render () {
    if (this.state.show) {
      return (
        <div id="modal">
          <h1>Modal</h1>
          <input type="image" src={exitButton} name="exitButton" id="exit-button" onClick={e => this.showModal(e)}/>
        </div>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }
}