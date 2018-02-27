import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import axios from 'axios';

/* Day 7: Signup, Login, Logout */

// 1. Create Login Form UI Component

// 2. Make POST /signup Request to the API

// 3. Make POST /login Request to the API

// 4. Hide other views if not logged in

// 5. Password secured?

// 6. Test app

export default class App extends React.Component {  
  constructor () {
    super();
    
    const messageType = "Welcome!"; 
    
    this.state={
      showLogin: true,
      showSignup: false,
      message: messageType,
      username: "",
      password: ""
    };
  }
  
  onChangeUsernameData(ev) {
    console.log(ev.target.value);
    this.setState({
      username: ev.target.value,
      password: ev.target.value
    });
  }
  
  onChangePasswordData(ev) {
        console.log(ev.target.value);
    this.setState({
      username: ev.target.value,
      password: ev.target.value
    });
  }
  
  showSignup () { 
    const messageType = "Welcome!";  
    
    this.setState ({
      showLogin: false,
      showSignup: true,
      message: messageType,
      username: "",
      password: ""
    });
  }
  
  showLogin () { 
    const messageType = "Welcome!";  
    
    this.setState ({
      showLogin: true,
      showSignup: false,
      message: messageType,
      username: "",
      password: ""
    });
  }
  
  onLoginType() {
    axios.post("http://localhost:8081/login", {
      username: this.state.username,
      password: this.state.password,
    })
    .then((response) => {
       console.log("성공");
      
       this.setState({
         showLogin: false,
         showSignup: false,
         message: response.data.message,
         username: "",
         password: ""
       });
    })
    .catch((error) => {
      console.log("로그인중 에러");

      this.setState ({
        showLogin: true,
        showSignup: false,
        message: error.response.data.message,
        username: "",
        password: ""
      });
    })
  }
  
  onSignupType() {
    axios.post("http://localhost:8081/signup", {
      username: this.state.username,
      password: this.state.password,
    })
    .then((response) => {
       console.log("성공");
      
       this.setState({
         showLogin: false,
         showSignup: true,
         message: response.data.message,
         username: "",
         password: ""
       });
    })
    .catch((error) => {
      console.log("회원가입에러");
      
      this.setState ({
        showLogin: false,
        showSignup: true,
        message: error.response.data.message,
        username: "",
        password: ""
      });
    })
  }  
  
render() {
    return ( 
      <div>
        {
          this.state.showLogin &&
            <Login
              message={this.state.message}
              usernameData={this.onChangeUsernameData.bind(this)}
              passwordData={this.onChangePasswordData.bind(this)}
              loginButtonClick={this.onLoginType.bind(this)} 
              signupTypeClick={this.showSignup.bind(this)} 
            />
        }
        
        {
          (!this.state.showLogin && this.state.showSignup) &&
            <Signup
              message={this.state.message}
              usernameData={this.onChangeUsernameData.bind(this)}
              passwordData={this.onChangePasswordData.bind(this)}
              signupButtonClick={this.onSignupType.bind(this)}
              loginTypeClick={this.showLogin.bind(this)}
            />
        }
        
        {
          (!this.state.showLogin && !this.state.showSignup) &&
            <div className="home">
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
        }
      </div>
    );
  }
}
