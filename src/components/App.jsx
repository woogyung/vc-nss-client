import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';

/* Day 4: Formatting date */

// 1. Inspect current date format

// 2. Write a utility function

// 3. Render pretty format

// 4. Test app

// 5. Re-write using moment.js

export default class App extends React.Component {
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
