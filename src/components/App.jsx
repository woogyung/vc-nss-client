import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import axios from 'axios';

/* Day 6: Connecting NY Times data */

// 1. Look at NSS-API document

// 2. Create UI for section selection

// 3. Call NSS-API Endpoint on section name click

// 4. React Component Lifecycle Hooks
// Doc: https://reactjs.org/docs/react-component.html

// 5. Re-render upon receiving new data

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
