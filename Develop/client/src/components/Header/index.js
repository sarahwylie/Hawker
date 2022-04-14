import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Hawker from '../../assets/images/icons/Hawker.svg';
import '../../assets/css/Header.css';
import Signup from '../pages/Signup'
import Login from '../pages/Login'

function Header({ history }) {
  let user = JSON.parse(localStorage.getItem('user-info'))
  function logOut() {
    localStorage.clear();
    history.push('/')
  }

  return (
    <header className='head'>
      <div className="flex-row">
        <div className='col-4'>

        </div>
        <div className='col-4'>
          <a href="/">
            <span role="img" aria-label="img-name">
              <img
                src={Hawker}
                alt="logo"
                className="photo"
                id="logo"
              />
            </span>
          </a>
          <div className='col-4'>
            {localStorage.getItem('user-info') ?
              <div>
                <a href="/orderHistory">
                  Order History
                </a>
                <a href="/">
                  <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </a>
              </div>
              :
              <div>
                <a href="/signup">
                  <button onClick={() => <Signup />}>Signup</button>
                </a>
                <a href="/login">
                  <button onClick={() => <Login />}>Login</button></a>
              </div>
            }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;