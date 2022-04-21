// Import dependencies
import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

// Create Signup form page component
//! Create the Signup Component
const Signup = ({ toggle }) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  useEffect(() => {
    toggle(false);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName
      }
    });
    console.info(mutationResponse);
    let userId = mutationResponse.data.addUser.user._id;
    localStorage.setItem('userId', `${userId}`);
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
        <h2>Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            className="formField"
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            className="formField"
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            className="formField"
            onChange={handleChange}
          />
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            className="formField"
            onChange={handleChange}
          />
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
