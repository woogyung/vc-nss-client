import React from 'react';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import axios from 'axios';

/* Day 6: Connecting NY Times data */

// 1. Look at NSS-API document

// 2. Create UI for section selection

// 3. Call NSS-API Endpoint on section name click

// 4. React Component Lifecycle Hooks
// Doc: https://reactjs.org/docs/react-component.html

// 5. Re-render upon receiving new data

export default class App extends React.Component {
  constructor () {
    super();
    
    this.state={
      showLogin: true,
      articlesData: articlesData,
      username: "",
      password: "",
      spinner: false
    }
  }
  
  onClickSection(ev) {
    const sectionName = ev.target.textContent;

    this.setState({
      spinner: true
    });
    
    axios.get(`http://localhost:8081/top-stories/${sectionName}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ijc4OSIsImlhdCI6MTUxOTkyMDUxMCwiZXhwIjoxNTIwMDA2OTEwfQ.oKYJCuknscyAePv3oW9rogaGNatXFCyfA1h74P6p2h4"
      }
    })
      .then((response) => {
        console.log("성공");
        this.setState({
          spinner: false,
          articlesData: response.data.results
        });
      })
      .catch((error) => {
        console.log("실패");
        this.setState({
          spinner: false,
          articlesData: articlesData
        });
      })
  }
  
  onUsernameChange(ev) {
    this.setState({
      username: ev.target.value,
      password: ev.target.value
    });
  }
  
  onPasswordChange(ev) {
    this.setState({
      username: ev.target.value,
      password: ev.target.value
    });
  }
  
  onLoginClick(ev) {
    console.log("click");
    
    axios.post("http://localhost:8081/login", {
      username: this.state.username,
      password: this.state.password
    })
    
    .then((response) => {
      console.log("성공");
      
      this.setState({
        showLogin: false,
        articlesData: articlesData
      });
    })
    
    .catch((error) => {
      console.log("에러");
      
      this.setState({
        showLogin: true,
        articlesData: null
      });
    })
  }
  
  render() {
    return ( 
      <div className="home">
        { 
          (!this.state.showLogin && this.state.spinner) && // 로그인 모드일때와 새로운 데이타를 받아보기 전에는 보이면 단됨.

          <div className="holder">
            <div className="preloader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>  
          </div>
        }
        {
          (this.state.showLogin) &&
          <div>
            <input type="text" onChange={this.onUsernameChange.bind(this)}/>
            <input type="text" onChange={this.onPasswordChange.bind(this)}/>
            <button onClick={this.onLoginClick.bind(this)}>Login</button>  
          </div>
        }
        {
          (!this.state.showLogin) &&
          <div>
            <ul onClick={this.onClickSection.bind(this)}>
              <li>fashion</li>
              <li>business</li>
              <li>tmagazine</li>
            </ul>  
          </div>
        }
        {
          (!this.state.showLogin) &&
          this.state.articlesData.map((data, i) => {
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
