import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Hawker from '../../assets/images/icons/Hawker.svg';
import '../../assets/css/Header.css';
import Signup from '../pages/Signup/index';
import Login from '../pages/Login/index';

function Header({ history }) {
  let user = JSON.parse(localStorage.getItem('user-info'));
  function logOut() {
    localStorage.clear();
    history.push('/');
  }

  const [onLogin, setOnLogin] = useState();

  function onToggle(toggle) {
    setOnLogin(toggle);
  }

  function showButton() {
    if (!onLogin) {
      return (
        <a href="/login">
          <button onClick={() => <Login onToggle={onToggle} />}>Login</button>
        </a>
      );
    } else {
      return (
        <a href="/signup">
          <button onClick={() => <Signup onToggle={onToggle} />}>Signup</button>
        </a>
      );
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
            <div className="log">
              {localStorage.getItem('user-info') ? (
                <div>
                  <a href="/orderHistory">Order History</a>
                  <a href="/">
                    <NavDropdown title={user && user.name}>
                      <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </a>
                </div>
              ) : (
                <div>{showButton()}</div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
