import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor() {
        super();

        this.state={
            loginId : "",
            loginPw : "",
            joinId : "",
            joinPw : "",
            joinValidationTxt : "",
            loginValidationTxt : ""
        }
    }

    handleChange(e) {
        const formName = e.target.name;
        const formValue = e.target.value;

        this.setState({
            [formName] : formValue
        });
    }

    validate(type) {
        var validId = null;
        var validPw = null;
        var valResult = null;

        if (type === 'submitJoin') {
            validId = this.state.joinId;
            validPw = this.state.joinPw;

        } else if (type === 'submitLogin') {
            validId = this.state.loginId;
            validPw = this.state.loginPw;
        }

        if(validId && validPw) {
            return true;
        } else if(!validId && !validPw) {

            valResult ="id, pw를 입력해주세요"
            return false;

        } else if (!validId) {

            valResult = "id를 입력해주세요";
            return false;

        } else if (!validPw) {

            valResult = "pw를 입력해주세요";
            return false;

        }

        if (type === 'submitJoin') {
            this.setState({
                joinValidationTxt : valResult
            })

        } else if (type === 'submitLogin') {
            this.setState({
                loginValidationTxt : valResult
            })
        }

    }

    submitJoin(e) {
        e.preventDefault();
        if(this.validate('submitJoin')){
            axios.post('http://localhost:8081/signup', {
                username : this.state.joinId,
                password : this.state.joinPw
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }

    submitLogin(e) {
        e.preventDefault();
         if(this.validate('submitLogin')){
             axios.post('http://localhost:8081/login', {
                 username : this.state.joinId,
                 password : this.state.joinPw
             })
             .then(function (response) {
                 console.log(response);
             })
             .catch(function (error) {
                 console.log(error);
             })
         }
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
                    <p className="validate_txt">{this.state.loginValidationTxt}</p>
                    <button type="submit" onClick={this.submitLogin.bind(this)}>로그인</button>
                    <a href="">회원가입</a>
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
                    <p className="validate_txt">{this.state.joinValidationTxt}</p>
                    <button type="submit" onClick={this.submitJoin.bind(this)}>회원가입</button>
                </fieldset>
            </form>
        </div>
    </div>
    );
  }
}
