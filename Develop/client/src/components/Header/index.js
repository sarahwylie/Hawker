import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Hawker from '../../assets/images/icons/Hawker.svg';
import '../../assets/css/Header.css';
import Signup from '../pages/Signup/index';
import Login from '../pages/Login/index';
import Auth from '../../utils/auth';
import Auto from '../pages/Auto';
import Clothing from '../pages/Clothing';
import Household from '../pages/Household';
import Outdoor from '../pages/Outdoor';
import Tech from '../pages/Tech';
import '../../assets/css/index.css';

function Header({ isLogin }) {

  const showButtons = () => {
    return isLogin ? (
      <a href="/signup">
        <button onClick={() => <Signup />} className='btn-primary'>Signup</button>
      </a>
    ) : (
      <a href="/login">
        <button onClick={() => <Login />} className='btn-primary'>Login</button>
      </a>
    );
  };

  function loggedIn() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <a href="/orderHistory"><button className='btn-primary'>Order History</button></a>
          <a href="/" onClick={() => Auth.logout()}><button className='btn-primary'>Logout</button></a>
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
          <div className="col-4">
            <NavDropdown title='Categories'>Categories
              <NavDropdown.Item onClick={Auto}>Auto</NavDropdown.Item>
              <NavDropdown.Item onClick={Clothing}>Clothing</NavDropdown.Item>
              <NavDropdown.Item onClick={Household}>Household</NavDropdown.Item>
              <NavDropdown.Item onClick={Outdoor}>Outdoor</NavDropdown.Item>
              <NavDropdown.Item onClick={Tech}>Tech</NavDropdown.Item>
            </NavDropdown>
          </div>
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
