import React from 'react';

export default class Signup extends React.Component{
  render(){
    return(
      <div className="layout">
        <h2>Signup</h2>
        <label>username</label>
        <input type="text" onChange={this.props.usernameInput}/>
        <label>password</label>
        <input type="text" onChange={this.props.passwordInput} />
        <button 
          className="btn login-btn"
          onClick={this.props.handleSignup}
        >회원가입</button>
        <span className="message">{this.props.message}</span>
      </div> 
    );
  }
};