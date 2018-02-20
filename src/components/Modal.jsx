import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  render() {
    return (
      <div className="dim"

        onClick={(ev) => { if (ev.target.tagName !== "IMG") {
          this.props.modalClose() }}}>
        <div className="modal-wrap">
          <div className="img">
            <img
              src={this.props.superJumboURL}
              alt={this.props.imgAlt}
            />
          </div>
          <button onClick={this.props.modalClose}>X</button>
        </div>
      </div>
    )
  }
};
