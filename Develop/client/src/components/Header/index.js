import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Hawker from '../../assets/images/icons/Hawker.svg';
import '../../assets/css/Header.css';
// import Auth from '../../utils/auth';

function Header() {
let user = JSON.parse(localStorage.getItem('user-info'))
console.warn(user)

  return (
    <header className='head'>
      <div>
        <div>
           
        </div>
        <div>
          <a href="/">
            <span role="img" aria-label="img-name">
              <img
                src={Hawker}
                alt="logo"
                className="photo"
                id="logo"
              />
            </span>
            <div>
              <NavDropdown title={user.name}>
              <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;