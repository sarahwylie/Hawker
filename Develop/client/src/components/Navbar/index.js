//TODO: NAVIGATION COMPONENT
//! Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Hawker from '../../assets/images/icons/Hawker.svg';
import '../../assets/css/Navbar.css';

//! Create Navigation component
function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <li>
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      );
    }
  }

  return (
    <nav>
      <span>
        <Link to="/">
          <span role="img" aria-label="img-name">
            <img src={Hawker} alt="logo" className="img-thumbnail mx-1 inline-flex" id="logo" />
          </span>
        </Link>
      </span>

      <ul className="links">{showNavigation()}</ul>
    </nav>
  );
}

export default Nav;
