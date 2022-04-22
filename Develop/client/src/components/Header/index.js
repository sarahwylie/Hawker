import React from 'react';


// import Form from 'react-bootstrap/Form';

import Hawker from '../../assets/images/icons/Hawker.svg';
import Signup from '../pages/Signup/index';
import Login from '../pages/Login/index';
import Auth from '../../utils/auth';

function Header({ isLogin }) {
  const showButtons = () => {
    return isLogin ? (
      <a href="/signup">
        <button onClick={() => <Signup />} className="btn-primary">
          Signup
        </button>
      </a>
    ) : (
      <a href="/login">
        <button onClick={() => <Login />} className="btn-primary loginBtn">
          Login
        </button>
      </a>
    );
  };

  function loggedIn() {
    if (Auth.loggedIn()) {
      return (
        <div className="log">
          <a href="/">
            <button className="btn-primary">Home</button>
          </a>
          <a href="/postItem">
            <button className="btn-primary">Hawk Item</button>
          </a>
          <a href="/dashboard">
            <button className="btn-primary">Dashboard</button>
          </a>
          <a href="/" onClick={() => Auth.logout()}>
            <button className="btn-primary">Logout</button>
          </a>
        </div>
      );
    } else {
      return showButtons();
    }
  }


  /* SEARCH BAR FOR AFTER THE PROJECT */
  // const [inputText, setInputText] = useState('');
  // let inputHandler = (e) => {
  //   //convert input text to lower case
  //   var lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };


  return (
    <header className="head">
      <nav>
        <div className="row">
        
          <div id="logo">
            <a href="/">
              <span role="img" aria-label="img-name">
                <img src={Hawker} alt="logo" className="photo" />
              </span>
            </a>

            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                onChange={inputHandler}
                className="me-2 formField"
                aria-label="Search"
              />
              <button input={inputText} className="btn-primary">
                Search
              </button>
            </Form> */}

          </div>
          <div className="colNav">{loggedIn()}</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
