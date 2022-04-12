import React from 'react';
import Hawker from '../../assets/images/icons/Hawker.svg'

function Header() {
  return (
    <header>
      <div className="flex-row">
        <div className="col-2 photo">
          <a href="/">
            <span role="img" aria-label="img-name">
              <img
                src={Hawker}
                alt="logo"
                className="img-thumbnail mx-1 inline-flex"
                id="logo"
              />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
