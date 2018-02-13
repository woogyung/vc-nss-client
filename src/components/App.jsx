import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import OrderButtons from './OrderButtons.jsx';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      articlesData: articlesData,
      dataCount: 0,
    }
  }

  AscendingOrder(){
    // 오름차순, 최신순
    if(this.state.dataCount !== 0){
      this.state.articlesData = articlesData.reverse();
      this.state.dataCount = 0;
    }

    this.setState({
        articlesData: articlesData
    });
  }

  DescendingOrder(){
    // 내림차순, 과거순...
    this.state.articlesData = articlesData.reverse();

    if(this.state.dataCount !== 0){
      this.state.articlesData = articlesData.reverse();
      return;
    }
    this.state.dataCount++;

    this.setState({
      articlesData: articlesData,
    });
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
        { this.renderArticles() }
      </div>
    );
  }
}