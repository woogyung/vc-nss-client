import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Modal from './Modal.jsx';

/* Day 5: Creating a Modal UI Component */

// 1. Making a decision if we need a new component

// 2. Making a decision where to place the new component

// 3. Creating a new component class

// 4. Decide if the component needs any props or states

// 5. Render the basics

// 6. Implement the details

// 7. Test app
console.log(articlesData); //array

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.handleModaln = this.handleModaln.bind(this);
    this.handleModalOut = this.handleModalOut.bind(this);
    this.state = {
      articlesData: articlesData,
      isShowImg: false,
      superJumboImg : '',
      imgAlt: '',
    };
  }

  handleModaln(imgSrc, imgAlt){
    this.setState({
      isShowImg: true,
      superJumboImg: imgSrc,
      imgAlt: imgAlt,
    });
  };

  handleModalOut(){
    this.setState({
      isShowImg: false,
      superJumboImg: '',
      imgAlt: ''
    })
  }

  render() {
    const isShowImg = this.state.isShowImg;
    const superJumboImg = this.state.superJumboImg;
    const imgAlt = this.state.imgAlt;

    let modalComponent = null;

    if(isShowImg){
      modalComponent = (
        <Modal
          onClick={ () => this.handleModalOut() }
          superJumboURL={superJumboImg}
          imgAlt={imgAlt}
        />
      );
    }

    return (
      <div className="home">
        {modalComponent}
        {
          articlesData.map((data, i) => {
            return <Article
              url={data.short_url}
              mainHeadline={data.title}
              key={i}
              thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
              publishedDate={data.published_date}
              onClick={ (e) => this.handleModaln(data.multimedia[data.multimedia.length-1].url, data.multimedia[data.multimedia.length-1].caption) }
            />
          })
        }
      </div>
    );
  }
}
