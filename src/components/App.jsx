import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Login from './Login.jsx'
import axios from 'axios';

/* Day 7: Signup, Login, Logout */

// 1. Create Login Form UI Component checked

// 2. Make POST /signup Request to the API checked

// 3. Make POST /login Request to the API checked

// 4. Hide other views if not logged in done

// 5. Password secured?

// 6. Test app

const logInfo = {
    userName: '',
    passWord: ''
};

export default class App extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
        style: {
          display:'none'
        },
        logInfoMessage:'',
        logIn: false
    }
  };
  
  onConfirm() {
    const loginValue = document.querySelectorAll('.inp-inform');
    
    for(let i = 0; i < loginValue.length; i++) {
        logInfo.userName = loginValue[0].value;
        logInfo.passWord = loginValue[1].value;
    };
    
    axios.post('http://localhost:8081/login', {
      username: logInfo.userName,
      password: logInfo.passWord
    })
    .then((response) => {
      this.setState({
        login:true
      })
    })
    .catch((error) => {
      this.setState({
          style: {
            display:'block',
            color: '#DF013A'
          },
          logInfoMessage: error.response.data.message
        });
    });
  }

  onJoin () {
    const loginValue = document.querySelectorAll('.inp-inform');

    for(let i = 0; i < loginValue.length; i++) {
        logInfo.userName = loginValue[0].value;
        logInfo.passWord = loginValue[1].value;
    };

    axios.post('http://localhost:8081/signup', {
        username: logInfo.userName,
        password: logInfo.passWord
    })
    .then( (response) => {
        this.setState({
          style: {
            display:'block',
            color: '#2E2EFE'
          },
          logInfoMessage: response.data.message,
          login:true
        });
    })
    .catch( (error) => {
      this.setState({
          style: {
            display:'block',
            color: '#DF013A'
          },
          logInfoMessage: error.response.data.message
        });
    });
  };
  
  render() {
    return (
      <div className="home">
        { 
          !this.state.login && <Login 
            logInfoMessage = { this.state.logInfoMessage }
            style = { this.state.style}
            onJoin ={ this.onJoin.bind(this)}
            onConfirm = { this.onConfirm.bind(this) }
          /> ||
          this.state.login && articlesData.map((data, i) => {
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
