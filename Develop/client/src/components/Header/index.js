import React from 'react';
// import { NavDropdown } from 'react-bootstrap';
import Hawker from '../../assets/images/icons/Hawker.svg';
import '../../assets/css/Header.css';
import Signup from '../pages/Signup/index';
import Login from '../pages/Login/index';
import Auth from '../../utils/auth';

function Header({ history, isLogin }) {
  // let user = JSON.parse(localStorage.getItem('user-info'));
  // function logOut() {
  //   localStorage.clear();
  //   history.push('/');
  // }

  const showButtons = () => {
    return isLogin ? (
      <a href="/signup">
        <button onClick={() => <Signup />}>Signup</button>
      </a>
    ) : (
      <a href="/login">
        <button onClick={() => <Login />}>Login</button>
      </a>
    );
  };

  function loggedIn() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <a href="/orderHistory">Order History</a>
          <a href="/" onClick={() => Auth.logout()}>Logout</a>
        </div>
      );
    } else {
      return showButtons();
    }
  }

  return (
    <header className="head">
      <nav>
        <div className="flex-row">
          <div className="col-4"></div>
          <div className="col-4">
            <a href="/">
              <span role="img" aria-label="img-name">
                <img src={Hawker} alt="logo" className="photo" id="logo" />
              </span>
            </a>
            <div className="log">{loggedIn()}</div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
