import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

function Login({ toggle }) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { loading, error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    toggle(true);
  });

  // Form submit handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password }
      });
      console.info(mutationResponse.data.login)
      let userId = mutationResponse.data.login.user._id;
      localStorage.setItem('userId', `${userId}`);
      const token = mutationResponse.data.login.token;
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
    <div className="itemContainer">
      <div className="formParent">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          
            <label htmlFor="email">Email address:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              className="formField"
              value={formState.email}
              onChange={handleChange}
            />
          
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              className="formField"
              value={formState.password}
              onChange={handleChange}
            />
        
          {loading ? (
            <div>
              <p className="loading-text">Incorrect credentials</p>
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
            <button type="submit" className='btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
