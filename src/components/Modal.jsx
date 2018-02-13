import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal-wrap">
        <div className="img">
          <img src={this.props.superJumboURL} alt="" />
        </div>
        <button onClick={this.props.onClick}>X</button>
      </div>
    )
  }
};