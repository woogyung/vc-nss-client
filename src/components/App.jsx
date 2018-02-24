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

       this.state=({
           showModal:false,
           mainImgURL:null
       })
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
          // 이런식으로 dom요소를 잡아서 써도되는것인가
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
                      {this.onModalClick(e);}
                      //props 사용시 해당 컴포넌트에서 사용한는 props는 해당 jsx라인에서만 적어야하는건아닌거 같은데 왜 작동을 안하지..
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
              jumboImgURL={data.multimedia.length ? data.multimedia[4].url : null}
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
