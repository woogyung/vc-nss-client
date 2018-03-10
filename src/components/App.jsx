import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import axios from 'axios';

const Home = () => {
  return (
    <div>
      <h2>NSS를 이용하려면 "로그인" , "회원가입" 해주세요.</h2>
    </div>
  );
};

const Articles = () => {
  return (
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
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const messageType = "Welcome!"; 
    
    this.state={
      isLoggedIn: false,
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
  
  onLoginType() {
    axios.post("http://localhost:8081/login", {
      username: this.state.username,
      password: this.state.password,
    })
    .then((response) => {
       console.log("성공");
      
       this.setState({
         isLoggedIn: true,
         message: response.data.message,
         username: "",
         password: ""
       });
    })
    .catch((error) => {
      console.log("로그인중 에러");

      this.setState ({
        isLoggedIn: false,
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
         isLoggedIn: false,
         message: response.data.message,
         username: "",
         password: ""
       });
    })
    .catch((error) => {
      console.log("회원가입에러");
      
      this.setState ({
        isLoggedIn: false,
        message: error.response.data.message,
        username: "",
        password: ""
      });
    })
  }  
  
  render () {
    return (
      <Router>
        <div className="home">
          <ul>
            <li><Link to="/home"> Home </Link></li>
            <li><Link to="/login"> Login </Link></li>
            <li><Link to="/signup"> Signup </Link></li>
            <li><Link to="/articles"> Articles </Link></li>
          </ul>
          <Route path="/home" component={Home} />
          <Route path="/login" render={() => {
            return !this.state.isLoggedIn ? <Login
              message={this.state.message}
              usernameData={this.onChangeUsernameData.bind(this)}
              passwordData={this.onChangePasswordData.bind(this)}
              loginButtonClick={this.onLoginType.bind(this)} 
            /> : <Redirect to="/articles" />    
          }} />
          <Route path="/signup" render={() => {
            return !this.state.isLoggedIn ? <Signup
              message={this.state.message}
              usernameData={this.onChangeUsernameData.bind(this)}
              passwordData={this.onChangePasswordData.bind(this)}
              signupButtonClick={this.onSignupType.bind(this)}
            /> : <Redirect to="/articles" />
          }} />
          <Route path="/articles" render={() => {
            return this.state.isLoggedIn ? <Articles /> : <Redirect to="/home" />
          }} />
        </div>
      </Router>  
    );
  };
}
