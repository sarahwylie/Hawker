import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Hawker from '../../assets/images/icons/Hawker.svg';
import { Link } from 'react-router-dom';
import '../../assets/css/Header.css';
// import Auth from '../../utils/auth';

function Header({history}) {
let user = JSON.parse(localStorage.getItem('user-info'))
console.warn(user)
// const history = useHistory();
function logOut() {
  localStorage.clear();
  history.push('/')
}

  return (
    <header className='head'>
      <div>
        <div>
           
        </div>
        <div>
          <Link to="/" />
            <span role="img" aria-label="img-name">
              <img
                src={Hawker}
                alt="logo"
                className="photo"
                id="logo"
              />
            </span>
            {localStorage.getItem('user-info')?
            <div>
              <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
            :null}
        </div>
      </div>
    </header>
  );
}

export default Header;