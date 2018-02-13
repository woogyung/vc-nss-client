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
console.log(articlesData[0].multimedia[4].format); // "superJumbo"
console.log(articlesData[0].multimedia[4].url); // "....jpg"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      superJumboURL : null
    };
  }

  rendermodal(url, target){

  };

  render() {
    return (
      <div className="home">
        <div className="dim">
           <Modal />

        </div>
        {
          articlesData.map((data, i) => {
            return <Article
              url={data.short_url}
              mainHeadline={data.title}
              key={i}
              thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
              publishedDate={data.published_date}
              onClick={ (e) => this.rendermodal(data.multimedia[data.multimedia.length-1].url, e.target) }
            />
          })
        }
      </div>
    );
  }
}
