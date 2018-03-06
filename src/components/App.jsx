import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Login from './Login.jsx';
import axios from 'axios';

/* Day 6: Connecting NY Times data */

// 1. Look at NSS-API document

// 2. Create UI for section selection

// 3. Call NSS-API Endpoint on section name click

// 4. React Component Lifecycle Hooks
// Doc: https://reactjs.org/docs/react-component.html

// 5. Re-render upon receiving new data

export default class App extends React.Component {

  constructor() {
        super();

        this.state = {
            loginComplete : false,
            articlesData : articlesData
        };
    }

    checkLoginState(){
        this.setState({
            loginComplete : true
        });
     }


  onCategorySelect(e) {
    const categoryName = e.target.textContent;

    axios.get('http:localhost:8081/top-stories/${categoryName}',{
        headers : {
            Authorization: 'Bearer ghs__df=423njsfdruur12jfjuh4!?frt34563ju8h84h2d10'
        }
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.table(error);
    });
  }

  render() {
    return (
      <div className="home">
          <div>
              <ul onClick={this.onCategorySelect.bind(this)}>
                  <li>upshot</li>
                  <li>travel</li>
                  <li>fashion</li>
                  <li>books</li>
              </ul>
          </div>
        <Login checkLogin={this.checkLoginState.bind(this)} />
        {
            this.state.loginComplete &&
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
