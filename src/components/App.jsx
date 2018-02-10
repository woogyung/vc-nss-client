import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import OrderButtons from './OrderButtons.jsx';

var a = 1;

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  AscendingOrder(){
    // 오름차순, 최신순 data 순서대로...
    return (
      console.log('오름차순')
    );
  }

  DescendingOrder(){
    // 내림차순, 과거순...
    console.log(articlesData)

    return(
      console.log('내림차순')
    )
  }

  renderOrderButtons(){
    return (
      <div className="btns">
        <OrderButtons
          value=" 오름차순 "
          onClick={ () => this.AscendingOrder() }
        />
        <OrderButtons
          value=" 내림차순 "
          onClick={ () => this.DescendingOrder() }
        />
      </div>
    );
  }

  renderArticles(){
    // data , 오름차순인지,내림차순인지...확인하고

    return(
      articlesData.map((data, i) => {
        return <Article
          url={data.short_url}
          mainHeadline={data.title}
          key={i}
          thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
          publishedDate={data.published_date}
        />
      })
    );
  }

  render() {
    return (
      <div className="home">
        { this.renderOrderButtons() }
      {/*
        renderArticles 이 새로....

      */}
        { this.renderArticles() }
      </div>
    );
  }
}
