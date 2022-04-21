import React, { useState } from 'react';
import { QUERY_USER } from '../../../utils/queries';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../../utils/queries';

function Confirmation({ setOpenModal }) {
  const [fullName, setShippingFullName] = useState('');
  const [address, setShippingAddress] = useState('');
  const [city, setShippingCity] = useState('');
  const [state, setShippingState] = useState('');
  const [zip, setShippingZip] = useState('');
  const [phonenumber, setShippingPhoneNumber] = useState('');

  const { itemData } = useQuery(QUERY_ITEMS);
  console.log(itemData);
  const { data } = useQuery(QUERY_USER);
  console.log(data);

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
    } else if (inputType === 'city') {
      setShippingCity(inputValue);
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

  const [setShow] = useState(false);
  //const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className="modalButton" onClick={handleShow}>
        {/* onClick={handleShow} */}
        <form className="formModal">
          <p>Full Name</p>
          <input
            value={fullName}
            name="fullName"
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
            value={city}
            name="city"
            onChange={handleInputChange}
            type="city"
            placeholder="City"
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
          <div>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="btn-primary"
            >
              Cancel
            </button>
            <button type="button" onClick={handleFormSubmit} className="btn-primary">
              Confirm
            </button>
          </div>
        </form>
      </button>
    </div>
  );
}

export default Confirmation;
