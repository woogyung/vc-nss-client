import React from 'react';
import App from './App.jsx';
import LoginForm from './LoginForm.jsx';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.jsx';
import classNames from 'classnames';

const Home = () => (
  <div>
    <h2>HOME</h2>
    <App />
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Question = ({ match, location, history }) => (
  <div>
    <h3>나는 {match.params.questionId}번 질문입니다.</h3>
    <p>나는 {match.params.questionId}번 질문에 대한 답변입니다.</p>
    {
      history.location.search && <p> 쿼리 스트링: {history.location.search}</p>
    }
  </div>
  
);

const QnAs = ({ match }) => (
  <div>
    <h2>Q&A</h2>

    <ul>
      <li>
        <Link to={`${match.url}/1`}>
          질문 1번입니다.
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/2`}>
          질문 2번입니다.
        </Link>
      </li>
      <li>
        <Link to={{
          pathname: `${match.url}/3`,
          search: '?hello=world'
        }}>
          질문 3번입니다.
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:questionId`} component={Question}/>
    <Route exact path={match.url} render={() => (
      <h3>질문 좀 선택해라!</h3>
    )}/>
  </div>
);

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:'',
      isLoggedIn: false,
      isError: false,
      informMessage:''
    };
  };
  
  onIdChanged (ev) {
    this.setState({
      username:ev.target.value
    });
  };

  onPasswordChanged (ev) {
    this.setState({
      password:ev.target.value
    });
  };

  onSubmit () {
    axios.post('http://localhost:8081/login', {
      username:this.state.username,
      password:this.state.password
    })
    .then((response) => {    
      this.setState({
        password:'',
        isLoggedIn:true,
        isError:false
      });
    })
    .catch((error) => {
      this.setState({
        informMessage:error.response.data.message,
        isError:true
      });
      console.log('login error', this.state.informMessage);
    });
  };

  onJoin () {
    axios.post('http://localhost:8081/signup', {
      username: this.state.username,
      password: this.state.password
    })
    .then(() => {    
      this.setState({
        password:'',
        isLoggedIn:true,
        isError:false
      });
    })
    .catch((error) => {
      this.setState({
        informMessage:error.response.data.message,
        isError:true
      });
    });

    console.log(this.state.informMessage);
  };
  
  render() {
    return (
      <Router>
        <div className="main">
          <Nav isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route path="/" exact={true} render={ ()=> !this.state.isLoggedIn ? (<Redirect to="/login" />) : (<Redirect to="/home" />) } />
            <Route path="/login"
              render={ () => !this.state.isLoggedIn ? (<LoginForm 
                                  isLoggedIn={this.state.isLoggedIn}
                                  isError={this.state.isError}
                                  informMessage={this.state.informMessage}
                                  onIdChanged={this.onIdChanged.bind(this)}
                                  onPasswordChanged={ this.onPasswordChanged.bind(this)}
                                  onSubmit={ this.onSubmit.bind(this)}
                                  onJoin={this.onJoin.bind(this)}
                                />) : (<Redirect to="/home" />)
            }/>
            <Route path="/home" render={ ()=> !this.state.isLoggedIn ? (<Redirect to="/login" />) : (<App />) } />
            <Route path="/about" component={About} />
            <Route path="/qna" render={({ match }) => !this.state.isLoggedIn ? (<QnAs match={match} />) : (<Redirect to="/home" />)} />
          </Switch>
        </div>
      </Router>
    );
  };
}