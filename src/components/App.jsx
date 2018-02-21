import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import axios from 'axios';
import Login from './Login.jsx';

/* Day 7: Signup, Login, Logout */

// 1. Create Login Form UI Component

// 2. Make POST /signup Request to the API

// 3. Make POST /login Request to the API

// 4. Hide other views if not logged in

// 5. Password secured?

// 6. Test app

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      buttonToggle : true,
    };
  }

  handleUiType(){
    this.setState({
      buttonToggle: !this.state.buttonToggle
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log( this.input.value );
  }

  // signupCheck(){
  //   console.log('test');
  //   axios.post('htttp://localhost:8081/signup', {
  //     username: 'Fred',
  //     password: 'Flintstone'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  render() {
    const uiType = (this.state.buttonToggle) ? '회원가입' : '로그인';

    return (
      <div className="home">
        <Login
          handleSubmit={this.handleSubmit.bind(this)}
          tittleChange={this.handleUiType.bind(this)}
          uiType={uiType}
        />
        {
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
