import React from 'react';
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

export default class App extends React.Component {
  constructor () {
    super ()
    this.state={
      showMainImgModal: false,
      modalImgURL: null
    };
  }
  
  showMainImgModal(i) {
    const imgURL = articlesData[i].multimedia[4].url;
    
    this.setState({
      showMainImgModal: true,
      modalImgURL: imgURL
    });
  }
  
  hideModalClick() {
    
    this.setState({
      showMainImgModal: false,
      modalImgURL: null
    });              
  }
  
  render() {
    return ( 
      <div className="home"> 
        {
          this.state.showMainImgModal &&
            <Modal
              mainImgURL={this.state.modalImgURL}
              hideModalClick={() => {
                this.hideModalClick();
              }}
            />
        }
        {
          articlesData.map((data, i) => {
            return <Article
              url={data.short_url}
              mainHeadline={data.title}
              key={i}    
              thumbnailImageClick={() => {
                this.showMainImgModal(i)
              }}      
              thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
              publishedDate={data.published_date}
            />
          })
        }  
      </div>
    );
  }
}
