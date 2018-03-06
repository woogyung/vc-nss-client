import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="login">
        <form action="#">
          <fieldset>
              <legend>로그인 화면 입니다.</legend>
              <div className="box-inform">
                <label htmlFor="logId" className="txt-inform">ID</label>
                <input id="logId" type="text" className="inp-inform" />
              </div>
              <div className="box-inform">
                <label htmlFor="logPassword" className="txt-inform">Password</label>
                <input id="logPassword" type="password" className="inp-inform" />
              </div>
              <div className="box-button">
                <button type="submit" className="btn" >확인</button>
                <button type="reset" className="btn">취소</button>
                <button type="submit" className="btn join" >회원가입</button>
              </div>
              <p className="message"></p>
          </fieldset>
        </form>
      </div>
    );
  }
}
