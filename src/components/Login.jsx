import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor() {
        super();

        this.state={
            loginId : "",
            loginPw : "",
            joinId : "",
            joinPw : ""
        }
    }

    handleChange(e) {
        const formName = e.target.name;
        const formValue = e.target.value;

        this.setState({
            [formName] : formValue
        });
    }

    submitLogin() {

    }

    submitJoin() {
        console.log(this.state.joinId,this.state.joinPw)
        // if(this.state.joinId && this.state.joinPw) {
        //
        // }
        // axios.post('http://localhost:8081/signup', {
        //     username :  joinId,
        //     password : joinPw
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }

  render() {
    return (
    <div className="account_form">
        <div className="login">
            <form>
                <fieldset>
                    <legend>login</legend>
                        <dl>
                            <dt>login</dt>
                            <dd>
                                <label><input type="text" value={this.state.loginId} name="loginId" onChange={this.handleChange.bind(this)} /></label>
                            </dd>
                            <dt>password</dt>
                            <dd>
                                <label><input type="password" value={this.state.loginPw} name="loginPw" onChange={this.handleChange.bind(this)} /></label>
                            </dd>
                        </dl>
                    <button type="submit" onClick={this.submitLogin.bind(this)}>로그인</button>
                    <a href="#">회원가입</a>
                </fieldset>
            </form>
        </div>

        <div className="join">
            <form>
                <fieldset>
                    <legend>회원가입</legend>
                    <dl>
                        <dt>id</dt>
                        <dd>
                            <label><input type="text" value={this.state.joinId} name="joinId" onChange={this.handleChange.bind(this)} /></label>
                        </dd>
                        <dt>password</dt>
                        <dd><label><input type="password" value={this.state.joinPw} name="joinPw" onChange={this.handleChange.bind(this)} /></label></dd>
                    </dl>
                    <button type="submit" onClick={this.submitJoin.bind(this)}>회원가입</button>
                </fieldset>
            </form>
        </div>
    </div>
    );
  }
}
