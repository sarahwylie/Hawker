import React from 'react';
import Hawker from '../../assets/images/icons/Hawker.svg';
import '../../assets/css/Header.css';
// import Auth from '../../utils/auth';

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
            {/* {isLoggedIn
           ?  <a href="/" onClick={() => Auth.logout()}>Logout</a>
          : <Login onClick={this.handleLoginClick} />} */}
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;