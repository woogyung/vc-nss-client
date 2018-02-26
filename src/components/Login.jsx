import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-wrap">
        <h1>{this.props.title}</h1>
        
        <div className="login-field">
          <div className="id-field"> 
            <input 
              type="text"
              placeholder="Id"
            >

            </input>
          </div>
          <div className="pw-field">
            <input 
              type="text"
              placeholder="Password"
            >

            </input> 
          </div> 
        </div>
        
        <div className="button-area">
          <button type="submit" className="login" onClick={this.props.currentTypeClick}>
            {this.props.currentType}
          </button>  
          
          <p className="join" onClick={this.props.otherTypeClick}>
            {this.props.otherType}
          </p>  
        </div>  
        
      </div>
    )
  }
}