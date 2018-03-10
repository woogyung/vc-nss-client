import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import axios from 'axios';

//[기본기능]
//홈 버튼 누르면 공백
//로그인 버튼 누르면 로그인창 뜨고 라우터 /login
//회원가입 버튼 누르면 회원가입창 뜨고 라우터 /signup
//아티클 버튼 누르면 아티클창 뜨고 라우터 /article

//[부가기능]
//로그인 되었을때만 아티클 창이 뜸(안되었을때는 안뜸)
//로그인 되었을때 로그인/회원가입 사라짐


//라우터 내부에 컴포넌트로 받음  -시작 
const Home = () => {
  return (
    <div>
      <h2>NSS를 이용하려면 "로그인" , "회원가입" 해주세요.</h2>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

const SignupForm = () => {
  return (
    <div>
      <Signup />
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
//라우터내부에 컴포넌트로 받음  -끝-



export default class App extends React.Component {
  constructor() {
    super();

    const messageType = "Welcome!"; 
    
    this.state={//현재상황
      isLoggedIn: false,
      message: messageType,
      username: "",
      password: ""
    };    
  }
  
  onLoginType() {//로그인 받음
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
  
  onSignupType() {//회원가입 받음
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
          <Route path="/home" component={Home}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignupForm} />
          <Route path="/articles" component={Articles} />
        </div>
      </Router>  
    );
  };
}



//export default class App extends React.Component {  
//  constructor () {
//    super();
//    
//    const messageType = "Welcome!"; 
//    
//    this.state={//현재상황
//      isloggedin: false,
//      showLogin: true,
//      showSignup: false,
//      message: messageType,
//      username: "",
//      password: ""
//    };
//  }
//  
//  onChangeUsernameData(ev) {//사용자이름 데이타 타겟에 전송
//    console.log(ev.target.value);
//    this.setState({
//      username: ev.target.value,
//      password: ev.target.value
//    });
//  }
//  
//  onChangePasswordData(ev) {//비밀번호 데이타 타겟에 전송
//        console.log(ev.target.value);
//    this.setState({
//      username: ev.target.value,
//      password: ev.target.value
//    });
//  }
//  
//  showSignup () { //회원가입 보여짐
//    const messageType = "Welcome!";  
//    
//    this.setState ({
//      showLogin: false,
//      showSignup: true,
//      message: messageType,
//      username: "",
//      password: ""
//    });
//  }
//  
//  showLogin () { //로그인 보여짐
//    const messageType = "Welcome!";  
//    
//    this.setState ({
//      showLogin: true,
//      showSignup: false,
//      message: messageType,
//      username: "",
//      password: ""
//    });
//  }
//  
//  onLoginType() {//로그인 받음
//    axios.post("http://localhost:8081/login", {
//      username: this.state.username,
//      password: this.state.password,
//    })
//    .then((response) => {
//       console.log("성공");
//      
//       this.setState({
//         showLogin: false,
//         showSignup: false,
//         message: response.data.message,
//         username: "",
//         password: ""
//       });
//    })
//    .catch((error) => {
//      console.log("로그인중 에러");
//
//      this.setState ({
//        showLogin: true,
//        showSignup: false,
//        message: error.response.data.message,
//        username: "",
//        password: ""
//      });
//    })
//  }
//  
//  onSignupType() {//회원가입 받음
//    axios.post("http://localhost:8081/signup", {
//      username: this.state.username,
//      password: this.state.password,
//    })
//    .then((response) => {
//       console.log("성공");
//      
//       this.setState({
//         showLogin: false,
//         showSignup: true,
//         message: response.data.message,
//         username: "",
//         password: ""
//       });
//    })
//    .catch((error) => {
//      console.log("회원가입에러");
//      
//      this.setState ({
//        showLogin: false,
//        showSignup: true,
//        message: error.response.data.message,
//        username: "",
//        password: ""
//      });
//    })
//  }  
//  
//render() {
//    return (//전체 총괄 컨테이너는 app컨포넌트
//      
//      <Router>
//      <div>
//        <ul>
//          <li><Link to="/login">login</Link></li>
//          <li><Link to="/signup">signup</Link></li>
//          <li><Link to="/articles">Articles</Link></li>
//        </ul>
//      </div>  
//
//      <div>
//        {
//          this.state.showLogin &&
//            
//            <Route path="/login" render={() => {
//               <Login
//                message={this.state.message}
//                usernameData={this.onChangeUsernameData.bind(this)}
//                passwordData={this.onChangePasswordData.bind(this)}
//                loginButtonClick={this.onLoginType.bind(this)} 
//                signupTypeClick={this.showSignup.bind(this)}
//              />
//            }} />  
//        }
//        
//        {
//          (!this.state.showLogin && this.state.showSignup) &&
//            
//            <Route path="/signup" render={() => {
//              <Signup
//                message={this.state.message}
//                usernameData={this.onChangeUsernameData.bind(this)}
//                passwordData={this.onChangePasswordData.bind(this)}
//                signupButtonClick={this.onSignupType.bind(this)}
//                loginTypeClick={this.showLogin.bind(this)}
//              />
//            }} />
//        }
//        
//        {
//          (!this.state.showLogin && !this.state.showSignup) &&
//            
//            <Route path="/articles" render={() => {
//               <div className="home">
//                {
//                  articlesData.map((data, i) => {
//                    return <Article
//                      url={data.short_url}
//                      mainHeadline={data.title}
//                      key={i}
//                      thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
//                      publishedDate={data.published_date}
//                    />
//                  })
//                }
//              </div>
//            }} />
//        }
//      </div>
//        
//      </Router>
//    );
//  }
//}
