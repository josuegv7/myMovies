import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../Utils/AuthService';
import css from '../Style/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <header>
        <div className={css.overlay}>
          <h1>myMovies</h1>
          <h3>Never Forget</h3>
          <br/>
          <ul>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/upload">Upload Videos</Link> :  ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (isLoggedIn()) ? ( <button
               onClick={() => logout()}>Log out </button> ) :
               ( <button
                 onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
	        
		    </div>
      </header>



    );
  }
}
