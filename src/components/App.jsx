import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Login from './Login.jsx';

/* Day 7: Signup, Login, Logout */
// 1. Create Login Form UI Component
// 2. Make POST /signup Request to the API
// 3. Make POST /login Request to the API
// 4. Hide other views if not logged in
// 5. Password secured?
// 6. Test app

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            loginComplete : false
        };
    }

    checkLoginState(){
        this.setState({
            loginComplete : true
        });
     }

  render() {
    return (
      <div className="home">
          <Login checkLogin={this.checkLoginState.bind(this)} />
        {
            this.state.loginComplete &&
            articlesData.map((data, i) => {
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
