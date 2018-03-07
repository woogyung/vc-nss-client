import React from 'react';
import Signup from './Signup.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

export default class Login extends React.Component {
  render(){;
    const loginStatus  = this.props.loggedIn;

    if (loginStatus) {
      return <Redirect to='/protected' />;
    }

    return (
      <div className="layout">
        <h2>login</h2>
        <label>username</label>
        <input type="text" onChange={this.props.usernameInput} />
        <label>password</label>
        <input type="text" onChange={this.props.passwordInput} />
        <button type="submit" className="btn login-btn" onClick={this.props.handleLogin}>로그인</button>
        <Link to="/signup" className="signup-btn">회원가입</Link>     
        <Route path="/signup" component={Signup} />
      </div>
    );
  }
};
