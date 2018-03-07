import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginStatus: false,
      username : '',
      password : '',
      accessToken: '',
      message : '', 
    };
  }

  renderAticles(){
    return(
      <div className="home">
        <button onClick={this.handleSignout.bind(this)}>singout</button>
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

  handleUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(){
    axios.post('http://localhost:8081/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      console.log(response);
      this.setState({
        message: '',
        accessToken: response.data.access_token,
        username: '',
        password: '',
        loginStatus: true,
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        message: '아이디/비밀번호가 틀렸습니다',
        loginStatus: false
      });
    });
  }

  handleSignup(){
    axios.post('http://localhost:8081/signup', {
      username: this.state.username,
      password: this.state.password,
    })
    .then((response) => {
      this.setState({
        message: response.data.message,
        username: '',
        password: '',
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        message: '이미 등록 되었습니다'
      });
    });
  }

  handleSignout(){
    this.setState({
      accessToken: '',
      loginStatus: false,
    });
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">protected</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </ul>

          <Route path="/login" 
            render={ () => (
              <Login
                usernameInput={this.handleUsername.bind(this)}
                passwordInput={this.handlePassword.bind(this)}
                loggedIn={this.state.loginStatus}
                handleLogin={this.handleLogin.bind(this)}
                message={this.state.message}
              />
            )}
          />

          <Route path="/protected" 
            render={ () => {
              return(
                (this.state.accessToken) ? this.renderAticles() : <p>로그인 해주세요</p>
              );
            }}
          />

          <Route path="/signup" 
            render={ () => (
              <Signup 
                usernameInput={this.handleUsername.bind(this)}
                passwordInput={this.handlePassword.bind(this)}
                handleSignup={this.handleSignup.bind(this)}
                message={this.state.message}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
