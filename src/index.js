import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Main from './components/Main.jsx';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './index.css';

/* Day 13: React Router (https://reacttraining.com/react-router/) */

// 1. Render a react router (a react component)

// 2. Configure react router

// 3. Route parameters

// 4. Query String

// 5. Redirect

/*
설명중
제일 위 컴포넌트를 만들어 거기서 제어 한다.
라우팅 하는 제일위 콤포넌트를 만듬.
*/

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
