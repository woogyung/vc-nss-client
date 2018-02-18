import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
//import moment from 'moment';
// moment는 article에서 맡아서 하는 부분이므로.

var a = 1;

export default class App extends React.Component {
  // ? constructor

  constructor(props) {
    super(props);

    this.state = {
      articles: articlesData
    };
  }

  sortNewest () {
    /*
      this.state.articles.sort 하면 this.state.articles에 직접적으로 영향이 가므로
      이는 setState와 다를게 없으므로 이런식으로 하게 되면 에러가 날 확률이 높다.
    */
    const articlesCopy = this.state.articles.slice();

    articlesCopy.sort(function (a, b) {
      return new Date(b.published_date) - new Date(a.published_date);
    });
    // momentjs.com 여기 라이브러리 참고 할것!

    this.setState({
      articles: articlesCopy
    })


  }

  sortOldest () {
    const articlesCopy = this.state.articles.slice();

    articlesCopy.sort(function (a, b) {
      return new Date(a.published_date) - new Date(b.published_date);
    });

    this.setState({
      articles: articlesCopy
    })
  }


  render() {
    return (
      <div className="home">
        <div>
          <button onClick = { () => this.sortNewest() }>최신순</button>
          <button onClick = { () => this.sortOldest() }>오래된순</button>
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

