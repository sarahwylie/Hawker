import React from 'react';
import Hawker from '../../assets/images/icons/Hawker.svg'
import '../../assets/css/Header.css';
import Login from '../pages/Login';
// import Logout from '../pages/Logout'

function Header() {


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
            {isLoggedIn
           ? <Logout onClick={this.handleLogoutClick} />
          : <Login onClick={this.handleLoginClick} />}
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;