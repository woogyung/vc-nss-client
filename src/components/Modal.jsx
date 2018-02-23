import React from 'react';
import 'font-awesome/css/font-awesome.css'


export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal_wrapper">
          <div className="modal">
              <button onClick={this.props.onModalCloseClick}><i className="fa fa-paw fa-3"></i></button>
              <div className="main_img">
                  <img src={this.props.mainImgURL} onClick={this.props.onThumbnailImgClick} alt="" />
              </div>
          </div>
      </div>
    );
  }
}
