import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articlesData : articlesData,
    };
  };

  asending(){
    const articlesCopy = this.state.articlesData.slice();

    articlesCopy.sort(function (a,b){
      return new Date(b.published_date) - new Date(a.published_date);
    });

    this.setState({
      articlesData: articlesCopy
    });
  }

  desending(){
    const articlesCopy = this.state.articlesData.slice();

    articlesCopy.sort(function (a,b){
      return new Date(a.published_date) - new Date(b.published_date);
    });

    this.setState({
      articlesData: articlesCopy
    });
  }

  render() {
    return (
      <div className="home">
        <div>
          <button onClick={() => this.asending()} >최신순</button>
          <button onClick={() => this.desending()} >오래된순</button>
        </div>
        {
          this.state.articlesData.map((data, i) => {
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