import React from 'react';

export default class Login extends React.Component {
  render () {
      return (
        <div className="login">
          <form action="#">
            <fieldset>
                <legend>로그인 화면 입니다.</legend>
                <div className="box-inform">
                  <label htmlFor="logId" className="txt-inform">ID</label>
                  <input id="logId" type="text" className="inp-inform" onChange={ this.props.onUserNameChange.bind(this) } />
                </div>
                <div className="box-inform">
                  <label htmlFor="logPassword" className="txt-inform">Password</label>
                  <input id="logPassword" type="password" className="inp-inform" onChange={ this.props.onPassWordChange.bind(this) } />
                </div>
                <div className="box-button">
                  <button type="submit" className="btn" onClick={ this.props.onLogin.bind(this) }>확인</button>
                  <button type="reset" className="btn">취소</button>
                  <button type="submit" className="btn join" onClick={ this.props.onJoin.bind(this) }>회원가입</button>
                </div>
                <p style={ this.props.isError ? {display:'block'} : null} className="message">{ this.props.informMessage }</p>
            </fieldset>
          </form>
        </div>
      ) 
  }
}