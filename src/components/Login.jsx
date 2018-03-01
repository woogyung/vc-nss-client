import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            userId : "",
            userPw : "",
            loginFormShow : true,
            joinFormShow : false,
            submitResult : "",
            isLoggedIn : false
        };
    }

    handleChange(e) {
        const formName = e.target.name;
        const formValue = e.target.value;

        this.setState({
            [formName] : formValue
        });
    }

    validate(type) {
        const userId = this.state.userId;
        const userPw = this.state.userPw;
        let valResult = null;

        if(userId && userPw) {
            return true;
        } else {
            if(!userId && !userPw) {
               valResult ="id, pw를 입력해주세요"
           } else if (!userId) {
               valResult = "id를 입력해주세요";
           } else if (!userPw) {
               valResult = "pw를 입력해주세요";
           }

           if (type === 'submitJoin') {
               this.setState({
                   submitResult : valResult
               });
               return false;
           } else if (type === 'submitLogin') {
               this.setState({
                   submitResult : valResult
               });
               return false;
           }
        }
    }

    submitJoin(e) {
        const that = this;
        e.preventDefault();
        if(this.validate('submitJoin')){
            axios.post('http://localhost:8081/signup', {
                username : this.state.userId,
                password : this.state.userPw
            })
            .then(function (response) {
                const result = response;
                if(result.status === 201) {
                    that.setState({
                        loginFormShow : true,
                        joinFormShow : false,
                        userId : "",
                        userPw : "",
                        submitResult : "회원가입에 성공하였습니다. 로그인해주세요"
                    });
                }
            })
            .catch(function (error) {
                that.setState({
                    submitResult : "id와 password를 확인해주세요"
                });
            })
        }
    }

    submitLogin(e) {
        e.preventDefault();
         if(this.validate('submitLogin')){
             axios.post('http://localhost:8081/login', {
                 username : this.state.userId,
                 password : this.state.userPw
             })
             .then( (response) => {
                 if(response.status === 200) {
                     const userId = response.data.data.username;
                     this.setState({
                         loginFormShow : false,
                         joinFormShow : false,
                         isLoggedIn : true,
                         userId : userId
                     });
                    this.props.checkLogin();
                 }
             })
             .catch( (error) => {
                 this.setState({
                     submitResult : "id와 password를 확인해주세요"
                 });
             })
         }
    }

    joinBtnClick(e) {
        e.preventDefault();
        this.setState({
            loginFormShow : false,
            joinFormShow : true,
            submitResult : ""
        });
    }

    loginBtnClick(e) {
        e.preventDefault();
        this.setState({
            loginFormShow : true,
            joinFormShow : false,
            submitResult : ""
        });
    }

  render() {
    return (

    <div className="account_form">
        {
            this.state.loginFormShow &&
            <div className="login">
                <form>
                    <fieldset>
                        <legend>로그인</legend>
                        <dl>
                            <dt>ID</dt>
                            <dd>
                                <label><input type="text" value={this.state.userId} placeholder="ID" name="userId" onChange={this.handleChange.bind(this)} /></label>
                            </dd>
                            <dt>PASSWORD</dt>
                            <dd>
                                <label><input type="password" value={this.state.userPw} placeholder="PASSWORD" name="userPw" onChange={this.handleChange.bind(this)} /></label>
                            </dd>
                        </dl>
                        <p className="validate_txt">{this.state.submitResult}</p>
                        <button type="submit" onClick={(e) => this.submitLogin(e)}>로그인</button>
                        <a href="" onClick={this.joinBtnClick.bind(this)}>회원가입</a>
                    </fieldset>
                </form>
            </div>
        }

        {
            this.state.joinFormShow &&
            <div className="join">
                <form>
                    <fieldset>
                        <legend>회원가입</legend>
                        <dl>
                            <dt>ID</dt>
                            <dd>
                                <label><input type="text" value={this.state.userId} placeholder="ID" name="userId" onChange={this.handleChange.bind(this)} /></label>
                            </dd>
                            <dt>PASSWORD</dt>
                            <dd><label><input type="password" value={this.state.userPw} placeholder="PASSWORD" name="userPw" onChange={this.handleChange.bind(this)} /></label></dd>
                        </dl>
                        <p className="validate_txt">{this.state.submitResult}</p>
                        <button type="submit" onClick={this.submitJoin.bind(this)}>회원가입</button>
                        <a href="" onClick={this.loginBtnClick.bind(this)}>로그인</a>
                    </fieldset>
                </form>
            </div>
        }

        {
            this.state.isLoggedIn &&
            <div className="greetings">
                <img src="http://thumbnail.egloos.net/600x0/http://pds25.egloos.com/pds/201510/17/68/b0245168_56215dcf51546.png" alt="" />
                <div>
                    <span>{this.state.userId}</span>
                    님 안녕하세요!
                </div>
            </div>
        }

    </div>
    );
  }
}
