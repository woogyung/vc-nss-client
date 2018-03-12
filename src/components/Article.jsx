import React from 'react';

export default class Article extends React.Component {
  render() {
    return (
      <div className="article">
        {
          this.props.publishedDate &&
          <div className="article-date">
            <p>{this.props.publishedDate}</p>
          </div>
        }
        <div className="image-panel">
          {
            this.props.thumbnailURL && <img src={this.props.thumbnailURL} alt="기사 대표 이미지"/>
          }
          <div>
            <a href={ this.props.url } target="_blank">Link</a>
          </div>
        </div>
        <div className="article-panel">
          <p>{ this.props.mainHeadline }</p>
        </div>
      </div>
    );
  }
}
