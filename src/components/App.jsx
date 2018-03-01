import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import axios from 'axios';

/* Day 7: Signup, Login, Logout */

// 1. Create Login Form UI Component checked

// 2. Make POST /signup Request to the API checked

// 3. Make POST /login Request to the API checked

// 4. Hide other views if not logged in done

// 5. Password secured?

// 6. Test app

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username:'',
      password:'',
      isLogin:false,
      informMessage:'',
      messageStyle: {
        display:'',
        color:''
      }
    }
  }

  onUserNameChange (ev) {
    this.setState({
      username: ev.target.value
    });
  }

  onPassWordChange (ev) {
    this.setState({
      password: ev.target.value
    })
  }

  onLogin () {
    axios.post('http://localhost:8081/login', {
      username:this.state.username,
      password:this.state.password
    })
    .then((response) => {    
      this.setState({
        password:'',
        isLogin:true,
      });
      console.log(response.data.message)
    })
    .catch((error)=>{
      this.setState({
        username:'',
        password:'',
        informMessage:error.response.data.message,
        messageStyle: {
          display:'block',
          color:'red'
        }
      });
    });
  }

  onJoin () {
    axios.post('http://localhost:8081/signup', {
      username: this.state.username,
      password: this.state.password
    })
    .then(() => {    
      this.setState({
        password:'',
        isLogin:true,
      });
    })
    .catch((error) => {
      this.setState({
        username:'',
        password:'',
        informMessage:error.response.data.message,
        messageStyle: {
          display:'block',
          color:'red'
        }
      });
    });
  }

  render() {
    return (
      <div className="home">
      { !this.state.isLogin &&
        <div className="login">
            <form action="#">
              <fieldset>
                  <legend>로그인 화면 입니다.</legend>
                  <div className="box-inform">
                    <label htmlFor="logId" className="txt-inform">ID</label>
                    <input id="logId" type="text" className = "inp-inform" onChange = { this.onUserNameChange.bind(this) } />
                  </div>
                  <div className="box-inform">
                    <label htmlFor="logPassword" className="txt-inform">Password</label>
                    <input id="logPassword" type="password" className ="inp-inform" onChange = { this.onPassWordChange.bind(this) } />
                  </div>
                  <div className="box-button">
                    <button type="submit" className="btn" onClick={ this.onLogin.bind(this) }>확인</button>
                    <button type="reset" className="btn">취소</button>
                    <button type="submit" className="btn join" onClick={ this.onJoin.bind(this) }>회원가입</button>
                  </div>
                  <p style={this.state.messageStyle} className="message">{ this.state.informMessage }</p>
              </fieldset>
            </form>
          </div>
        }
        { this.state.isLogin &&
          articlesData.map((data, i) => {
            return <Article
              url={data.short_url}
              mainHeadline={data.title}
              key={i}
              thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
              publishedDate={data.published_date}
            />
          })
        }    
      </div>
    );
  }
}
