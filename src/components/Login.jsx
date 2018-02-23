import React from 'react';

export default class Login extends React.Component {
  render(){
    const buttonName = (this.props.uiType === '회원가입') ? '로그인': '회원가입';

    return(
      <div className="login-wrap">
        <button
          className="uitype-btn btn"
          onClick={this.props.uiTypeChange}
        >{buttonName}
        </button>
        <div>
          <form
            onSubmit={this.props.handleSubmit}
            data-type={this.props.uiType}>
            <h3>{this.props.uiType}</h3>
            <div className="id-area input-area">
              <label>아이디</label>
              <input
                type ="text"
                name="usernameValue"
                onChange={this.props.handleInputValue}
              />
            </div>
            <div className="pw-area input-area">
              <label>비밀번호</label>
              <input
                type ="text"
                name="passwordValue"
                onChange={this.props.handleInputValue}
              />
            </div>
            <button
              className="action-btn btn"
              type="submit"
            >
              {this.props.uiType}
            </button>
            <span className="message">{this.props.statusMessage}</span>
          </form>
        </div>
      </div>
    );
  }
}