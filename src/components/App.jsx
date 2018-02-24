import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Modal from './Modal.jsx';

<<<<<<< HEAD
var a = 1;
=======
/* Day 5: Creating a Modal UI Component */

// 1. Making a decision if we need a new component

// 2. Making a decision where to place the new component

// 3. Creating a new component class

// 4. Decide if the component needs any props or states

// 5. Render the basics

// 6. Implement the details

// 7. Test app
>>>>>>> 5a4b25165510c429c30045f37ca047ea23a74e67

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
      console.log(typeof(articlesData[i].multimedia[4].url))
      //왜 여기에서 모달에 띄우는 이미지 url정보를 전달하는가..?
      this.setState({
          showModal:true,
          mainImgURL: modalImgURL
      })
  }

  hideModal() {
      console.log('close')
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
              />
          }

        {
          articlesData.map((data, i) => {
              // console.log(data.multimedia[4].url)
            return <Article
              url={data.short_url}
              mainHeadline={data.title}
              key={i}
              jumboImgURL={data.multimedia.length ? data.multimedia[4].url : null}
              onThumbnailImgClick={() => {
                //여기 왜 화살표 함수쓰는지...? onclick이벤트로 바로 이곳의 내용이 전달이 되니까 화살표(함수!!!)가 없으면 로드되자마자 실행됨...
                this.showModal(i);
              }}
              onModalCloseClick={() => {
                  this.hideModal();
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
