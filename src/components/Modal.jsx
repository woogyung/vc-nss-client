import React from 'react';

export default class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      showMainImageDescription: false
    };
  }

  onMainImageClick() {
    this.setState({
      showMainImageDescription: !this.state.showMainImageDescription
    });
  }

  render() {
    return (
      <div className="modal">
        <figure>
          <img alt="" src={this.props.mainImageURL} onClick={this.onMainImageClick.bind(this)}/>

          {
            this.state.showMainImageDescription &&
            <figcaption>{this.props.mainImageDescription}</figcaption>
          }
        </figure>
      </div>
    );
  }
}
