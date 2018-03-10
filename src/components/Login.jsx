import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-wrap">
        <h1>Login</h1>
        
        <div class="message-status">
          <p>{this.props.message}</p>
        </div>  
        <div className="login-field">
          <div className="id-field"> 
            <input 
              type="text"
              placeholder="Username"
              onChange={this.props.usernameData}
            />
          </div>
          <div className="pw-field">
            <input 
              type="text"
              placeholder="Password"
              onChange={this.props.passwordData}
            />
          </div> 
        </div>
        
        <div className="button-area">
          <button type="submit" className="login" onClick={this.props.loginButtonClick}>
            Login
          </button>  
          
          <Link to="/signup">
            <p className="join" onClick={this.props.signupTypeClick}>
             → Sign up
           </p> 
          </Link>  
        </div>
        
      </div>
    )
  }
}
