import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import '../../../assets/css/Login.css';

const containerStyle = {
  border: '1px solid black',
  maxWidth: '600px',
  margin: '0 auto'
};

const formParentStyle = {
  textAlign: 'center'
};

const formElementStyle = {};

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { loading, error }] = useMutation(LOGIN_USER);

  // Form submit handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { email: 'Tim@gmail.com', password: 'password' }
      });

      const token = data.login.token;
      Auth.login(token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div style={containerStyle} className="container my-1">
      <Link to="/signup">← Go to Signup</Link>
      <div className="formParent" style={formParentStyle}>
        <h2>Login</h2>
        <form
          style={{
            border: '1px solid black',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
          onSubmit={handleFormSubmit}
        >
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
              style={formElementStyle}
            />
          </div>
          <div>
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              value={formState.password}
              onChange={handleChange}
              style={formElementStyle}
            />
          </div>
          {loading ? (
            <div>
              <p className="loading-text">Loading...</p>
            </div>
          ) : null}
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect. Please correct credentials or create a new
                account
              </p>
            </div>
          ) : null}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
