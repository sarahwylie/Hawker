import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../../utils/mutations';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  const itemData = JSON.parse(localStorage.getItem('itemData'));
  let userId = localStorage.getItem('userId');
  let itemId = itemData.item._id;

  useEffect(() => {
    const saveOrder = async () => {
      const data = await addOrder({ variables: { item: itemId, user: userId } });
      console.info(data);

      setTimeout(() => {
        localStorage.removeItem('itemData');
        window.location.assign('/');
      }, 5000);
    };
    saveOrder();
  }, [addOrder, itemId, userId]);

  return (
    <div className='success'>
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>You will now be redirected to the home page</h2>
    </div>
  );
}

export default Success;
