import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../Utils/AuthService';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">myMovies</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">All Videos</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/upload">Upload Videos</Link> :  ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (isLoggedIn()) ? ( <button className="btn btn-danger log btn-sm"
               onClick={() => logout()}>Log out </button> ) :
               ( <button className="btn btn-danger navbar-btn"
                 onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
