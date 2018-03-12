import React from 'react';
import classNames from 'classnames';

export default class LoginForm extends React.Component {
  render() {
    const errorClass = classNames({
      message:true,
      error: this.props.isError
    });

    return (
      <div className="login">
        <form action="#">
          <fieldset>
              <legend>로그인 화면 입니다.</legend>
              <div className="box-inform">
                <label htmlFor="logId" className="txt-inform">ID</label>
                <input id="logId" type="text" className="inp-inform" onChange={this.props.onIdChanged}/>
              </div>
              <div className="box-inform">
                <label htmlFor="logPassword" className="txt-inform">Password</label>
                <input id="logPassword" type="password" className="inp-inform" onChange={this.props.onPasswordChanged}/>
              </div>
              <div className="box-button">
                <button type="submit" className="btn" onClick={this.props.onSubmit} >확인</button>
                <button type="reset" className="btn">취소</button>
                <button type="submit" className="btn join" onClick={this.props.onJoin} >회원가입</button>
              </div>
              <p className={ errorClass }>{ this.props.informMessage }</p>
          </fieldset>
        </form>
      </div>
    );
  }
}
