import React from 'react';
import 'font-awesome/css/font-awesome.css'

export default class Modal extends React.Component {

    constructor() {
        super();
        this.state = {
            descShow: false,
            imgDescription: null
        };
    }

    viewdescription() {
        this.setState({
            descShow: !this.state.descShow,
            imgDescription: "imgDescription"
        })
    }

    render() {
        return (
            <div className="modal_wrapper" onClick={this.props.onModalClick}>
                <div className="modal">
                    <button className="btn_close" onClick={this.props.onCloseClick}>
                        <i className="fa fa-paw fa-3"></i>
                    </button>
                    <figure>
                        <div className="main_img">
                            <img src={this.props.mainImgURL} onClick={this.viewdescription.bind(this)} alt=""/>
                        </div>
                        {
                            this.state.descShow &&
                            <figcaption>{this.state.imgDescription}</figcaption>
                        }
                    </figure>
                </div>
            </div>
        );
    }
}
