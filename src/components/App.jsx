import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import axios from 'axios';

const LoginForm = () => {
  return (
    <div>
      <h2>로그인을 해주세요.</h2>
      <div>
        <label>사용자이름</label>
        <input type="text" />
        <label>비밀번호</label>
        <input type="text" />
        <button>로그인</button>
      </div>
    </div>
  );
};

const SignupForm = () => {
  return (
    <div>
      <h2>회원가입을 해주세요.</h2>
      <div>
        <label>사용자이름</label>
        <input type="text" />
        <label>비밀번호</label>
        <input type="text" />
        <button>회원가입</button>
      </div>
    </div>
  );
};

//renderArticles () {
//  return (
//    articlesData.map((data, i) => {
//      return <Article
//        url={data.short_url}
//        mainHeadline={data.title}
//        key={i}
//        thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
//        publishedDate={data.published_date}
//      />
//    })
//  ); 
//};


export default class App extends React.Component {
  constructor() {
    super();
  }
  
  render () {
    return (
      <Router>
        <div className="home">
          <ul>
            <h2>NSS를 이용하려면 "로그인" , "회원가입" 해주세요.</h2>
            <li><Link to="/home"> Home </Link></li>
            <li><Link to="/login"> Login </Link></li>
            <li><Link to="/signup"> Signup </Link></li>
            <li><Link to="/articles"> Articles </Link></li>
          </ul>
          <Route path="/home" />
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignupForm}/>
          <Route path="/articles" />
        </div>
      </Router>  
    );
  };
}

//기본 로그인 모드  
//export default class App extends React.Component {
//  constructor() {
//    super();
//    
//    this.state={
//      showLogin: true,
//      showSignup: false,
//      username: '',
//      password: '',
//      message: ''
//    }
//  }
//  
//  onUsernameChange (ev) {
//    this.setState({
//      username: ev.target.value,
//      password: ev.target.value
//    })
//  }
//  
//  onPasswordChange (ev) {
//    this.setState({
//      username: ev.target.value,
//      passowrd: ev.target.value   
//    })
//  }
//  
//  onLoginSubmit () {
//    axios.post('http://localhost:8081/login', {
//      username:this.state.username,
//      password:this.state.username
//    })
//    
//    .then((response) => {
//      
//      this.setState({
//        showLogin: false,
//        message: ''
//      });
//    })
//    .catch((error) => {
//      console.log('에러');
//      
//      this.setState({
//        message: error.response.data.message
//      });
//    })
//  }
//  
//  onSignupSubmit () {
//    axios.post('http://localhost:8081/signup', {
//      username:this.state.username,
//      password:this.state.password
//    })
//    
//    .then((response) => {
//      console.log('성공');
//      
//      this.setState({
//        message: response.data.message
//      });  
//    })
//    
//    .catch((error) => {
//      console.log('에러');
//
//      this.setState({
//        message: error.response.data.message
//      })
//    })
//  }
//
//  render() {
//    return ( 
//      
//      <div className="home">
//        {
//          (this.state.showLogin) &&
//          <div> 
//            <input type="text" onChange={this.onUsernameChange.bind(this)}/>
//            <input type="text" onChange={this.onPasswordChange.bind(this)}/>
//            <button onClick={this.onLoginSubmit.bind(this)}>로그인</button>
//            <button onClick={this.onSignupSubmit.bind(this)}>회원가입</button>
//            <p>{this.state.message}</p>
//          </div>
//        }
//        {
//          (!this.state.showLogin) &&
//          articlesData.map((data, i) => {
//            return <Article
//              url={data.short_url}
//              mainHeadline={data.title}
//              key={i}
//              thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
//              publishedDate={data.published_date}
//            />
//          })
//        }
//      </div>
//    );
//  }
//}
