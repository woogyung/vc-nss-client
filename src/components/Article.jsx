import React from 'react';
import ReactDOM from 'react-dom';

export default class Article extends React.Component {
  render() {
    return (
      <div className="article">
        { /* Display Thumbnail Image */ }
        <a href={ this.props.url } target="_blank">Original News Link</a>
        { /* Display Date */ }
        <p>{ this.props.mainHeadline }</p>
        { /* Display Keywords */ }
      </div>
    );
  }
}
