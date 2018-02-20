import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Dimmed from './Dimmed.jsx';
import Modal from './Modal.jsx';

var a = 1;

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dimmedStyle: {
        display: 'none'
      },
      popUpStyle: {
        display:'none'
      },
      popUpImg: null
    }

  }

  popUpClick(i) {

    let scrollTop = window.scrollY

    this.setState({
      dimmedStyle: {
        display:'block',
      },
      popUpStyle: {
        display:'block',
        top:(scrollTop + 400) + 'px'
      },
      popUpImg: articlesData[i].multimedia[articlesData[i].multimedia.length - 1].url
    })
    
  }

  popUpClose() {
    this.setState({
      dimmedStyle: {
        display:'none'
      },
      popUpStyle: {
        display:'none'
      }
    })
  }
  
  render() {
    return (
      <div className="home">
        <div className="inner-home">
          {
            articlesData.map((data, i) => {
              return <Article
                url={data.short_url}
                mainHeadline={data.title}
                key={i}
                thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
                publishedDate={data.published_date}
                popUpImg={data.multimedia.length ? data.multimedia[data.multimedia.length - 1].url : null}
                onClick = {this.popUpClick.bind(this, i)}
              />
            })
          }
        </div>
        <Dimmed style = {this.state.dimmedStyle} />
        <Modal 
          style = {this.state.popUpStyle}
          onClose = {this.popUpClose.bind(this)}
          popUpImg = {this.state.popUpImg}
        />
      </div>
    );
  }
}
