// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../../../utils/auth';

// Create Signup form page component
function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  return (
    <div>
      <h2>Signup</h2>
    </div>
  );
}

// Export component
export default Signup;
