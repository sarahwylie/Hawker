import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../../utils/mutations';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  const itemData = JSON.parse(localStorage.getItem('itemData'));
  let itemId = itemData.item._id;
  console.log(itemData.item._id);

  const saveOrder = () => {
    const { data } = addOrder({ variables: { id: itemId,
     } });
    console.log(data);

    setTimeout(() => {
      localStorage.removeItem('itemData');
      window.location.assign('/');
    }, 5000);
  };

  return (
    <div>
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>You will now be redirected to the home page</h2>
      {saveOrder()}
    </div>
  );
}

export default Success;
