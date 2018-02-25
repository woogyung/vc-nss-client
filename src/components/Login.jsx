import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-wrap">
        <h1>NSS Login</h1>
        
        <div className="login-field">
          <div className="id-field">
            <span> ID </span> 
            <input type="text"></input>
          </div>
          <div className="pw-field">
            <span> PW </span>
            <input type="text"></input> 
          </div> 
        </div>
        
        <div>
          <button className="login">Login</button>
        </div>  
        
        <div className="join">
          <p>→ Sign up</p>
        </div>
      </div>
    )
  }
}