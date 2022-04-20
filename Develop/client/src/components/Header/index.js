import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import Form from 'react-bootstrap/Form';
import Hawker from '../../assets/images/icons/Hawker.svg';
import Signup from '../pages/Signup/index';
import Login from '../pages/Login/index';
import Auth from '../../utils/auth';
import '../../assets/css/index.css';
import SearchList from '../SearchList';

function Header({ isLogin }) {
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);
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

  function showDiv() {
    if (document.getElementById('catBtn').style.display === '') {
      document.getElementById('catBtn').style.display = 'block';
    } else {
      document.getElementById('catBtn').style.display = '';
    }
  }
  const [inputText, setInputText] = useState('');
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const getCategoryData = () => {
    return (
      <ul className="cats" id="catBtn">
        {categoryData.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <header className="head">
      <nav>
        <div className="row">
          <div className="col title">
            <button className="btn-primary" onClick={showDiv}>
              Categories
            </button>
            <div className="itemContainer">
              {categoryData ? getCategoryData() : <div>Loading...</div>}
            </div>
          </div>
          <div className="col">
            <a href="/">
              <span role="img" aria-label="img-name">
                <img src={Hawker} alt="logo" className="photo" id="logo" />
              </span>
            </a>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                onChange={inputHandler}
                className="me-2 formField"
                aria-label="Search"
              />
              <button className="btn-primary">Search</button>
              <SearchList input={inputText} />
            </Form>
          </div>
          <div className="col">{loggedIn()}</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
