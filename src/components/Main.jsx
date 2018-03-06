import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import LoginForm from './LoginForm.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';

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
      history.location.search && <p>쿼리 스트링: {history.location.search}</p>
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
      isLoggedIn: false,
    }
  }
  render() {
    return (
      <Router>
        <div className="menu">
          <ul className="list-menu">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/qna">Q&A</Link>
            </li>
          </ul>
          <Route path="/login" component={LoginForm} />
          <Route path="/home" component={App} />
          <Route path="/about" component={About} />
          <Route path="/qna" render={({ match }) => {
            return this.state.isLoggedIn ? (<QnAs match={match} />) : (<Redirect to="/home" />);
          }} />
        </div>
      </Router>
    );
  };
}