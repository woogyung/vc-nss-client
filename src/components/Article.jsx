import React from 'react';
import moment from 'moment';
import 'moment/locale/ko'

export default class Article extends React.Component {
  render() {
    return (
      <div className="article">
        {
          this.props.publishedDate &&
          <div className="article-date">
            <p>{moment(this.props.publishedDate).format('llll')}</p>
          </div>
        }
        <div className="image-panel">
          {
            this.props.thumbnailURL && <img src={this.props.thumbnailURL} alt="" onClick={this.props.onThumbnailImgClick} />
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
