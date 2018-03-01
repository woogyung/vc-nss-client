import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import axios from 'axios';
import Login from './Login.jsx';
import Indicater from './Indicater.jsx';

/* Day 7: Signup, Login, Logout */

// 1. Create Login Form UI Component

// 2. Make POST /signup Request to the API

// 3. Make POST /login Request to the API

// 4. Hide other views if not logged in

// 5. Password secured?

// 6. Test app

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.renderArticles = this.renderArticles.bind(this);
    this.state = {
      articlesData: articlesData,
      buttonToggle : true,
      usernameValue: '',
      passwordValue: '',
      message:'',
      accessToken: '',
      isIndicator: false,
    };
  }

  handleUiType(){
    this.setState({
      buttonToggle: !this.state.buttonToggle,
      message: ''
    });
  }

  handleInputValue(e){
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  }

  renderArticles(){
    return (
      this.state.articlesData.map((data, i) => {
        return <Article
          url={data.short_url}
          mainHeadline={data.title}
          key={i}
          thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
          publishedDate={data.published_date}
        />
      })
    );
  }

  handleSubmit(e){
    e.preventDefault();

    if(e.target.dataset.type === '회원가입'){
      axios.post('http://localhost:8081/signup', {
        username: this.state.usernameValue,
        password: this.state.passwordValue
      })
      .then((response) => {
        this.setState({
          message: response.data.message,
          username: '',
          password: '',
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          message: '이미 등록 되었습니다'
        });
      });

    }else{
      axios.post('http://localhost:8081/login', {
        username: this.state.usernameValue,
        password: this.state.passwordValue
      })
      .then((response) => {
        console.log(response);
        this.setState({
          message: '',
          accessToken: response.data.access_token,
          username: '',
          password: '',
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          message: '아이디/비밀번호가 틀렸습니다'
        });
      });
    }
  }

  handleCategory(e){
    const category = e.target.textContent;
    const indicater = this.state.isIndicator;

    if(this.state.accessToken){
      if(!indicater){
        this.setState({
          isIndicator : true
        });
      }
    }
    
    axios.get(`http://localhost:8081/top-stories/${category}`, {
      headers:{
        'Authorization': `Bearer ${this.state.accessToken}`
      }
    })
    .then((response) => {
      console.log(response);
      this.setState({
        articlesData : response.data.results,
        isIndicator : false
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    const uiType      = (this.state.buttonToggle) ? '회원가입' : '로그인';
    const message     = this.state.message;
    const accessToken = this.state.accessToken;
    const isIndicator = this.state.isIndicator;

    return (
      <div className="home">
        <Login
          handleInputValue={this.handleInputValue.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          uiTypeChange={this.handleUiType.bind(this)}
          uiType={uiType}
          statusMessage={message}
        />
          <nav className="new-navigation">
          <ul onClick={(e) => this.handleCategory(e)}>
            <li><a href="#">sports</a></li>
            <li><a href="#">arts</a></li>
            <li><a href="#">books</a></li>
            <li><a href="#">movies</a></li>
            <li><a href="#">theater</a></li>
          </ul>
        </nav>
        
        {isIndicator ? <Indicater /> : null}
        {accessToken ? this.renderArticles() : null}
      </div>
    );
  }
}
