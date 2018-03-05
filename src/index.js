import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './index.css';
import Login from './components/Login.jsx';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

/* Day 13: React Router (https://reacttraining.com/react-router/) */

// 1. Render a react router (a react component)

// 2. Configure react router

// 3. Route parameters

// 4. Query String

// 5. Redirect

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

var isLoggedIn = false;

class LoginForm extends React.Component {
  isLoggedIn = true;
  
  constructor(props){
    super(props)
    this.state = {
      loginStatus : false,

    }; 
  }


  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ loginStatus: true });
    });
    
  };
  
  render(){
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { loginStatus } = this.state;

    if (loginStatus) {
      return <Redirect to='/protected' />;
    }

    return (
      <div className="login-form">
        <h2>login</h2>
        <label>username</label>
        <input type="text" />
        <label>password</label>
        <input type="text" />
        <button type="submit" className="btn login-btn" onClick={this.login}>로그인</button>
        <Link to="/signup" className="signup-btn">회원가입</Link>     
        <Route path="/signup" component={Signup} />
      </div>
    );
  }
};

const Signup = () => (
  <div>
    <label>username</label>
    <input type="text" />
    <label>password</label>
    <input type="text" />
    <button className="btn login-btn">회원가입</button>
  </div>
);

const Home = () => (
  <div>
    <h2>HOME</h2>
  </div>
);





const Protected = () => (
  <h2>Protected</h2>
);

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">protected page</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>

      </ul>
      
      <Route path="/home" component={Home} />
      <Route path="/login" component={LoginForm} />
      <Route path="/protected" component={App} />
      <Route path="/signup" component={Signup} />



      <Route path="/protected" component={Protected} />
    </div>
  </Router>,
  document.getElementById('root')
);
