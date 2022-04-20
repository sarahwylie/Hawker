import React,{useState} from 'react';
import { QUERY_CHECKOUT } from '../../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_USER } from '../../../utils/queries';
import { useLazyQuery, useQuery } from '@apollo/client';
import { selectionSetMatchesResult } from '@apollo/client/cache/inmemory/helpers';
import { QUERY_ITEMS } from '../../../utils/queries';
import Modal from 'react-modal';

function Confirmation({ setOpenModal }) {

  
  const [fullName, setShippingFullName] = useState('');
  const [address, setShippingAddress] = useState('');
  const [city, setShippingCity] = useState('');
  const [state, setShippingState] = useState('');
  const [zip, setShippingZip] = useState('');
  const [phonenumber, setShippingPhoneNumber] = useState('');

  const { itemData } = useQuery(QUERY_ITEMS);
  console.log(itemData);
  const { data } =useQuery(QUERY_USER)
    console.log(data)

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

 
    if (inputType === 'address') {
      setShippingAddress(inputValue);
    } else if (inputType === 'fullName') {
      setShippingFullName(inputValue);
    } else if (inputType === 'phonenumber') {
      setShippingPhoneNumber(inputValue);
    } else if (inputType === 'state') {
      setShippingState(inputValue);
    } else if (inputType === 'zip') {
      setShippingZip(inputValue);
    }
    
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();
   
    setShippingFullName('');
    setShippingCity('');
    setShippingState('');
    setShippingPhoneNumber('');
    setShippingAddress('');
    setShippingZip('');
  };


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div >
      <button className='modalButton' onClick={handleShow}>
      {/* onClick={handleShow} */}
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
        <button onClick={() => {  setOpenModal(false) }}  id="cancelBtn">Cancel</button>
        <button type="button" onClick={handleFormSubmit}>Confirm</button>
      </form>
      </button>
    </div>
  );
}




export default Confirmation;