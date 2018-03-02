import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import Login from './Login.jsx';
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
      isError:false,
      informMessage:''
    }
  }

  onUserNameChange (ev) {
    this.setState({
      username: ev.target.value
    });
    return ev.target.value;
  }

  onPassWordChange (ev) {
    this.setState({
      password: ev.target.value
    });
    return ev.target.value;
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
        isError:false
      });
    })
    .catch((error)=>{
      this.setState({
        informMessage:error.response.data.message,
        messageStyle: {
          display:'block',
          color:'red'
        },
        isError:true
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
        isError:false
      });
    })
    .catch((error) => {
      this.setState({
        informMessage:error.response.data.message,
        isError:true
      });
    });
  }

  render() {
    return (
      <div className="home">
        { !this.state.isLogin && 
          <Login 
            onUserNameChange = { this.onUserNameChange.bind(this) }
            onPassWordChange = { this.onPassWordChange.bind(this) }
            onLogin = { this.onLogin.bind(this) }
            onJoin = { this.onJoin.bind(this) }
            informMessage = { this.state.informMessage }
            isError = { this.state.isError }
          />
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
