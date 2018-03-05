import React from 'react';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginStatus: false,
    };
  }

  render(){
    return(
      <div>
        <div className="login-wrap">
          <form>
            <label>아이디</label>
            <input text="" />
            <label>비밀번호</label>
            <input text="" />
            <button onClick="">로그인</button>
          </form>
          <a href="">회원가입</a>
        </div>
        <div className="contents">

          로그인되면 /protect로 넘어가서 
          기사보임...
        </div>

      </div>
    );
  }
}