import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
  render(){
    const buttonName = (this.props.uiType === '회원가입') ? '로그인': '회원가입';

    return(
      <div className="login-wrap">
        <button
          className="uitype-btn btn"
          onClick={this.props.tittleChange}
        >{buttonName}
        </button>
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <h3>{this.props.uiType}</h3>
            <div className="id-area input-area">
              <label>아이디</label>
              <input type ="text" size="15" ref={ (input) => {this.input = input }}
              />
            </div>
            <div className="pw-area input-area">
              <label>비밀번호</label>
              <input type ="text" size="15"
              />
            </div>
            <button
              className="action-btn btn"
              type="submit"
            >
              {this.props.uiType}
            </button>
            <span class="message">* {this.props.uiType} 완료되었습니다.</span>
          </form>
        </div>
      </div>
    );
  }
}