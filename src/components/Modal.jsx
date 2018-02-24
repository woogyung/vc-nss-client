import React from 'react';

export default class Modal extends React.Component {
  render () {
    return (
      <div className="modal-article">
      <button className="close" onClick={this.props.hideModalClick}>X</button>
        <img 
          alt="" 
          src={this.props.mainImgURL}
        />
      </div>  
    );
  }
}
