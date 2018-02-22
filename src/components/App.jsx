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
    this.renderArticles = this.renderArticles.bind(this);
    this.state = {
      buttonToggle : true,
      usernameValue: '',
      passwordValue: '',
      message:'',
      loginStatus: '',
    };
  }

  handleUiType(){
    this.setState({
      buttonToggle: !this.state.buttonToggle,
      message: ''
    });
  }

  handleInputValue(e){
    console.log(e.target.value);
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  }

  renderArticles(){
    return (
      articlesData.map((data, i) => {
        return <Article
          url={data.short_url}
          mainHeadline={data.title}
          key={i}
          thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
          publishedDate={data.published_date}
        />
      })
    )
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e.target.dataset.type);

    if(e.target.dataset.type === '회원가입'){
      // signup
      axios.post('http://localhost:8081/signup', {
        username: this.state.usernameValue,
        password: this.state.passwordValue
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        this.setState({
          message: response.data.message
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          message: '이미 등록 되었습니다'
        });
      });
    }else{
      // login
      axios.post('http://localhost:8081/login', {
        username: this.state.usernameValue,
        password: this.state.passwordValue
      })
      .then((response) => {
        console.log(response);
        this.setState({
          loginStatus : response.statusText
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          message: '아이디/비밀번호가 틀렸습니다'
        });
      });
    }
  }

  render() {
    const uiType = (this.state.buttonToggle) ? '회원가입' : '로그인';
    const message = this.state.message;
    const loginStatus = this.state.loginStatus;

    return (
      <div className="home">
        <Login
          handleInputValue={this.handleInputValue.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          tittleChange={this.handleUiType.bind(this)}
          uiType={uiType}
          statusMessage={message}
        />
        {loginStatus ? this.renderArticles() : null}
      </div>
    );
  }
}
