import React from 'react';
import ReactDOM from 'react-dom';
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
    super ()
    
    const loginType = "login";
    const signupType = "sign up";
    const messageType = "Welcome!"; 
    
    this.state={
      showLogin: true,
      showSignup: false,
      title: loginType,
      currentType: loginType,
      otherType: signupType,
      message: messageType,
      usernameData: "",
      passwordData: "",
    }
  }
  
  inputData(ev) {
    this.setState({
      usernameData: ev.target.value,
      passwordData: ev.target.value,
    })
  }
  
  showSignup () { 
    const loginType = "login";
    const signupType = "sign up";
    const messageType = "Welcome!";  
    
    this.setState ({
      showLogin: false,
      showSignup: true,
      title: signupType,
      currentType: signupType,
      otherType: null,
      message: messageType,
      usernameData: "",
      passwordData: "",
    });
  }
  
  onLoginType(ev) {
    
    axios.post("http://localhost:8081/login", {
      username: this.state.usernameData,
      password: this.state.passwordData,
    })
    .then((response) => {
       console.log("성공");
      
       this.setState({
         showLogin: false,
         message: response.data.message,
       });
    })
    .catch((error) => {
      console.log("로그인중 에러");

      this.setState ({
        showLogin: true,
        message: error.response.data.message,
    });
    })
  }
  
  onSignupType(ev) {
    
    axios.post("http://localhost:8081/signup", {
      username: this.state.usernameData,
      password: this.state.passwordData,
    })
    .then((response) => {
       console.log("성공");
      
       this.setState({
         showLogin: true,
         message: response.data.message,
       });
    })
    .catch((error) => {
      console.log("회원가입에러");
      
      this.setState ({
        showLogin: false,
        message: error.response.data.message,
    });
    })
  }  
  
render() {
    return ( 
      <div>
        {
          this.state.showLogin &&
            <Login
              title={this.state.title}
              message={this.state.message}
              inputIdField={this.inputData.bind(this)}
              inputPwField={this.inputData.bind(this)}
              signupType={this.state.otherType}
              signupTypeClick={this.showSignup.bind(this)}
              loginButtonClick={this.onLoginType.bind(this)}  
            />
        }
        {
          !this.state.showLogin &&
            <Signup
              title={this.state.title}
              message={this.state.message}
              inputIdField={this.inputData.bind(this)}
              inputPwField={this.inputData.bind(this)}
              signupType={this.state.otherType}
              signupButtonClick={this.onSignupType.bind(this)}  
            />
        }
        
        {
          (!this.state.showLogin && this.state.showSignin) &&
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
