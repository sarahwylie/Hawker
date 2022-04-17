import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form';
import Hawker from '../../assets/images/icons/Hawker.svg';
import Signup from '../pages/Signup/index';
import Login from '../pages/Login/index';
import Auth from '../../utils/auth';
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

  const dropdown = () => {
    if (Auth.loggedIn()) {
      return (
        <div className="col-4">
          <Dropdown id="collasible-nav-dropdown">
            <DropdownButton title='Categories'>
              <Dropdown.Menu>
                <ul>
                  <li><Dropdown.Item href="/auto">Auto</Dropdown.Item></li>
                  <li><Dropdown.Item href="/clothing">Clothing</Dropdown.Item></li>
                  <li><Dropdown.Item href="/household">Household</Dropdown.Item></li>
                  <li><Dropdown.Item href="/outdoor">Outdoor</Dropdown.Item></li>
                  <li><Dropdown.Item href="/tech">Tech</Dropdown.Item></li>
                </ul>
              </Dropdown.Menu>
            </DropdownButton>
          </Dropdown>
        </div>
      )
    }
  }
  
  return (
    <nav>
      <header className="head">
        <nav>
          <div className="flex-row">
            {dropdown()}
            <div className="col-4">
              <a href="/">
                <span role="img" aria-label="img-name">
                  <img src={Hawker} alt="logo" className="photo" id="logo" />
                </span>
              </a>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <button className='btn-primary'>Search</button>
              </Form>
              <div className="log col-4">{loggedIn()}</div>
            </div>
          </div>
        </nav>
      </header>
    </nav >
  );
}

export default Header;
