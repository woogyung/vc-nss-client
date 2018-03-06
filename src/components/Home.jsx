import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {
          articlesData.map((data, i) => {
            return <Article
              url={data.short_url}
              mainHeadline={data.title}
              key={i}
              thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
              publishedDate={data.published_date}
            />
          })
        }
      </div>
    );
  }
}
