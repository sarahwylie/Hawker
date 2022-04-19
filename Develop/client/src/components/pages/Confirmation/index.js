import React,{useState} from 'react';
import { QUERY_CHECKOUT } from '../../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_USER } from '../../../utils/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import { selectionSetMatchesResult } from '@apollo/client/cache/inmemory/helpers';
import { QUERY_ITEMS } from '../../../utils/queries';
import Modal from 'react-modal';

function Confirmation() {
 // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  
  const [fullName, setShippingFullName] = useState('');
  const [address, setShippingAddress] = useState('');
  const [city, setShippingCity] = useState('');
  const [state, setShippingState] = useState('');
  const [zip, setShippingZip] = useState('');
  const [phonenumber, setShippingPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { itemData } = useQuery(QUERY_ITEMS);
  console.log(itemData);
  const { data } =useQuery(QUERY_USER)
    console.log(data)

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either address, fullname, and phonenumber
    if (inputType === 'address') {
      setShippingAddress(inputValue);
    } else if (inputType === 'fullName') {
      setShippingFullName(inputValue);
    } else {
      setShippingPhoneNumber(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the address is not valid or if the fullName is empty. If so we set an error message to be displayed on the page.
    if (!(address) || !fullName) {
      setErrorMessage('Address or fullname is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the phonenumber is not valid. If so, we set an error message regarding the phonenumber.
    }
    if (!(phonenumber)) {
      setErrorMessage(
        `Choose a more secure phonenumber for the account: ${fullName}`
      );
      return;
    }
    alert(`Hello {}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setShippingFullName('');
    setShippingCity('');
    setShippingState('');
    setShippingPhoneNumber('');
    setShippingAddress('');
    setShippingZip('');
  };

  //const data = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //let item = props.props;

  return (
    <div >
      
      <form className="formModal">
          <p>Full Name</p>
          <input
          value={fullName}
          name="fullname"
          onChange={handleInputChange}
          type="fullname"
          placeholder="Full Name"
        />
         <p>Shipping Address:</p>
        <input
          value={address}
          name="address"
          onChange={handleInputChange}
          type="address"
          placeholder="Address"
        />
        <input
          value={state}
          name="state"
          onChange={handleInputChange}
          type="state"
          placeholder="State"
        />      
        <input
          value={zip}
          name="zip"
          onChange={handleInputChange}
          type="zip"
          placeholder="Zip Code"
        />    
         <p>Phone Number:</p>
        <input
          value={phonenumber}
          name="phonenumber"
          onChange={handleInputChange}
          type="phonenumber"
          placeholder="Phone Number (optional)"
        />
        <p></p>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}




export default Confirmation;