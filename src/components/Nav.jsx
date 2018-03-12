import React from 'react';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';

export default class Nav extends React.Component {

  render() {
    const menuClassName = classNames({
      "list-menu":true,
      logIn: this.props.isLoggedIn
    });
    return (
      <div className="menu">
        <ul className={ menuClassName }>
          { !this.props.isLoggedIn &&
            <li>
              <NavLink to="/login" activeClassName="on">Login</NavLink>
            </li>
          }
          <li>
            <NavLink to="/home" activeClassName="on">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="on">About</NavLink>
          </li>
          <li>
            <NavLink to="/qna" activeClassName="on">Q&A</NavLink>
          </li>
        </ul>
      </div>
    );
  };
}
