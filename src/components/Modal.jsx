import React from 'react';
import articlesData from '../config/data.json';

export default class Modal extends React.Component {
    render() {
        return (           
            <div className="popup" style = {this.props.style}>
                <div className="inner-popup">
                        {
                            this.props.popUpImg && <img src={this.props.popUpImg} className="img-popup" />
                        }
                    
                    <a href="#none" className="close" onClick = { () => this.props.onClose() }>닫기</a>
                </div>
            </div>
        )
    }
}
