import React from 'react';

export default class Login extends React.Component {
    render () {
        return (
          <div className="login">
            <form action="#">
              <fieldset>
                  <legend>로그인 화면 입니다.</legend>
                  <div className="box-inform">
                    <label for="logId" className="txt-inform">ID</label>
                    <input id="logId" type="text" className = "inp-inform" />
                  </div>
                  <div className="box-inform">
                    <label for="logPassword" className="txt-inform">Password</label>
                    <input id="logPassword" type="password" className ="inp-inform" />
                  </div>
                  <div className="box-button">
                    <button type="submit" className="btn" onClick = { () => this.props.onConfirm() }>확인</button>
                    <button type="reset" className="btn">취소</button>
                    <button type="submit" className="btn join" onClick = { () => this.props.onJoin() }>회원가입</button>
                  </div>
                  <p className="message" style={this.props.style}>{ this.props.logInfoMessage }</p>
              </fieldset>
            </form>
          </div>
        ) 
    }
}