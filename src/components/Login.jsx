import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-wrap">
        <h1>{this.props.title}</h1>
        
        <div>
          <p>{this.props.message}</p>
        </div>  
        <div className="login-field">
          <div className="id-field"> 
            <input 
              type="text"
              placeholder="Id"
              onChange={this.props.inputData}
            >
              {this.props.inputData}
            </input>
          </div>
          <div className="pw-field">
            <input 
              type="text"
              placeholder="Password"
              onChange={this.props.inputData}
            >
            </input> 
          </div> 
        </div>
        
        <div className="button-area">
          <button type="submit" className="login" onClick={this.props.loginButtonClick}>
            {this.props.title}
          </button>  
          
          <p className="join" onClick={this.props.signupTypeClick}>
            {this.props.signupType}
          </p>  
        </div>
        
      </div>
    )
  }
}