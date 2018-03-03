import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    
    this.state={
      showLogin: true,
      showSignup: false,
      username: '',
      password: '',
      message: ''
    }
  }
  
  onUsernameChange (ev) {
    this.setState({
      username: ev.target.value,
      password: ev.target.value
    })
  }
  
  onPasswordChange (ev) {
    this.setState({
      username: ev.target.value,
      passowrd: ev.target.value   
    })
  }
  
  onLoginSubmit () {
    axios.post('http://localhost:8081/login', {
      username:this.state.username,
      password:this.state.username
    })
    
    .then((response) => {
      
      this.setState({
        showLogin: false,
        message: ''
      });
    })
    .catch((error) => {
      console.log('에러');
      
      this.setState({
        message: error.response.data.message
      });
    })
  }
  
  onSignupSubmit () {
    axios.post('http://localhost:8081/signup', {
      username:this.state.username,
      password:this.state.password
    })
    
    .then((response) => {
      console.log('성공');
      
      this.setState({
        message: response.data.message
      });  
    })
    
    .catch((error) => {
      console.log('에러');

      this.setState({
        message: error.response.data.message
      })
    })
  }

  render() {
    return ( 
      
      <div className="home">
        {
          (this.state.showLogin) &&
          <div> 
            <input type="text" onChange={this.onUsernameChange.bind(this)}/>
            <input type="text" onChange={this.onPasswordChange.bind(this)}/>
            <button onClick={this.onLoginSubmit.bind(this)}>로그인</button>
            <button onClick={this.onSignupSubmit.bind(this)}>회원가입</button>
            <p>{this.state.message}</p>
          </div>
        }
        {
          (!this.state.showLogin) &&
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
