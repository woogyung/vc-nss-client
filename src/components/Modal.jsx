import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  render(){
    return (
      <div className="modal-wrap">
        <div className="img">
          <img src="" alt="" />
        </div>
        <button>X</button>
      </div>
    )
  }
};