import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT, QUERY_SINGLE_ITEM } from '../../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import Confirmation from '../Confirmation';
import { getInclusionDirectives } from '@apollo/client/utilities';
import { useLocation } from 'react-router-dom'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Checkout = (product) => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  let location = useLocation()


  const details = JSON.parse(localStorage.getItem("itemData")).item

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function submitCheckout() {
    const itemIds = [];
    
    getCheckout({
      variables: { items: itemIds }
    });
  }

  const tax = (8.25 / 100) * details.price;
  console.log(tax)
  const shipping = (5 / 100) * details.price;
  console.log(shipping)

  return (
    <div>
      <div>
      <h1>Purchase Confirmation</h1>
      <h3>Shipping Details</h3>
      <button className='openModalBtn'
      onClick={() => {
        setModalOpen(true);
      }}
      >
        Add
      </button>
      {modalOpen && <Confirmation setModalOpen={setModalOpen} /> }
      </div>
      <p>Item Price-   {details.price}</p>
      <p>Sales Tax-    {tax}</p>
      <p>Shipping-     {shipping}</p>
      <p>Total-     {details.price}</p>
      <img src={details.image}></img>
      <button onClick={submitCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
