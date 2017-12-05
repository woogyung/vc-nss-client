import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './index.css';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

/* Day 13: React Router (https://reacttraining.com/react-router/) */

// 1. Render a react router (a react component)

// 2. Configure react router

// 3. Route parameters

// 4. Query String

// 5. Redirect

var isLoggedIn = false;

const LoginForm = () => {
  isLoggedIn = true;

  return (
    <div>
      <h2>로그인됨</h2>
    </div>
  );
};

const Home = () => (
  <div>
    <h2>HOME</h2>
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

ReactDOM.render(
  <Router>
    <div>
      <ul>
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
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/qna" render={({ match }) => {
        return isLoggedIn ? (<QnAs match={match} />) : (<Redirect to="/home" />);
      }} />
    </div>
  </Router>,
  document.getElementById('root')
);
