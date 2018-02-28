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

   constructor(){
       super();

       this.state= {
           showModal:false,
           mainImgURL:null
       };
   }

  showModal(i) {
      const modalImgURL = articlesData[i].multimedia[4].url;

      this.setState({
          showModal:true,
          mainImgURL: modalImgURL
      })
  }

  onModalClick(e) {
      const target = e.target;

      if (target.className === 'modal_wrapper') {
          this.setState({
              showModal:false,
              mainImgURL:null
          })
      }
  }

  onCloseClick() {

      this.setState({
          showModal:false,
          mainImgURL:null
      })
  }

  render() {

    return (
      <div className="home">
          {
              this.state.showModal &&
              <Modal
                  mainImgURL={this.state.mainImgURL}
                  onModalClick={(e) =>
                      {this.onModalClick(e)}
                  }
                  onCloseClick={() =>
                      {this.onCloseClick()}
                  }
              />
          }

        {
          articlesData.map((data, i) => {
            return <Article
              url={data.short_url}
              mainHeadline={data.title}
              key={i}
              onThumbnailImgClick={() => {
                this.showModal(i);
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
