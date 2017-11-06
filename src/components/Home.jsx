import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {
          articlesData.map((data, i) => {
            return <Article url={data.web_url} mainHeadline={data.headline.main} key={i} />
          })
        }
      </div>
    );
  }
}
