import React from 'react';

export default class Modal extends React.Component {
  render () {
    return (
      <div className="modal-home" onClick={this.props.hideModalBackground}>
        <div className="modal-article">
          <p className="close" onClick={this.props.hideModalButton}>X</p>
          <img 
            alt="" 
            src={this.props.mainImgURL}
          />
        </div>
      </div>  
    );
  }
}
