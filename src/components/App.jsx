import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';

export default class App extends React.Component {

  constructor() {
      super();
      this.state = {
          articles : articlesData,
          btnNew : null,
          btnOld : null
      }
  }

  sortNews(sortType) {
    const articles = this.state.articles.slice();

    if(sortType === 'newest') {
        articles.sort(function (a,b) {
            return new Date(b.published_date) - new Date(a.published_date);
        });
        this.setState({
            articles : articles,
            btnNew : "active",
            btnOld : null
        });
    } else {
        articles.sort(function (a,b) {
            return new Date(a.published_date) - new Date(b.published_date);
        });
        this.setState({
            articles : articles,
            btnNew : null,
            btnOld : "active"
        });
    }
  }

  render() {
    return (
      <div className="home">
          <div className="btns">
              <button className={this.state.btnNew} onClick={() => this.sortNews('newest')}>Newest</button>
              <button className={this.state.btnOld} onClick={() => this.sortNews('oldest')}>Oldest</button>
          </div>
        {
          this.state.articles.map((data, i) => {
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
