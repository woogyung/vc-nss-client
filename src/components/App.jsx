import React from 'react';
import ReactDOM from 'react-dom';
import articlesData from '../config/data.json';
import Article from './Article.jsx';
import axios from 'axios';
import Login from './Login.jsx';

/* Day 7: Signup, Login, Logout */

// 1. Create Login Form UI Component

// 2. Make POST /signup Request to the API

// 3. Make POST /login Request to the API

// 4. Hide other views if not logged in

// 5. Password secured?

// 6. Test app

export default class App extends React.Component {
  
  constructor () {
    super ()
    
    const loginType = "login";
    const signupType = "sign up";
    
    this.state={
      title: loginType,
      currentType: loginType,
      otherType: signupType,
    }
  }
  
  changeCurrentType(ev) {
    const target = ev.target.tagName;
    const changedSignup = !this.state.currentType ? "login" : "sign up";
    const changedLogin = this.state.otherType ? "login" : "sign up";
    
    if (target === "BUTTON") {     
      this.setState({
        title: changedSignup,
        currentType: changedSignup,
        otherType: changedLogin,
      });
    }
  }
  
  changeOtherType(ev) {
    const target = ev.target.tagName;
    const changedSignup = this.state.currentType ? "login" : "sign up";
    const changedLogin = !this.state.otherType ? "login" : "sign up";
    
    if (target === "P") {     
      this.setState({
        title: changedSignup,
        currentType: changedSignup,
        otherType: changedLogin,
      });
    }
  }
                  
                  
  render() {
    return ( 
      <div>
          <Login
            title={this.state.title}
            inputIdField={this.state.inputData}
            inputPwField={this.state.inputData}
            currentType={this.state.currentType}
            otherType={this.state.otherType}
            
            currentTypeClick={(ev) => {
              this.changeCurrentType(ev);
            }}
            otherTypeClick={(ev) => {
              this.changeOtherType(ev);
            }}       
          />
      </div> 
      
//      <div className="home">
//        {
//          articlesData.map((data, i) => {
//            return <Article
//              url={data.short_url}
//              mainHeadline={data.title}
//              key={i}
//              thumbnailURL={data.multimedia.length ? data.multimedia[1].url : null}
//              publishedDate={data.published_date}
//            />
//          })
//        }
//      </div>
    );
  }
}
