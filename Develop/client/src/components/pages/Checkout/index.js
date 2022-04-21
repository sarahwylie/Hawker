// import React from 'react';
// import { ExternalLink } from 'react-external-link';
// import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';


const Checkout = () => {

import React, { useEffect, useState } from 'react';
import { useLazyQuery, useQuery  } from '@apollo/client';
import { QUERY_CHECKOUT, QUERY_SINGLE_ITEM } from '../../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import Confirmation from '../Confirmation';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Checkout = () => {
  let itemId = window.location.href.substring(42);
  const itemIds = useQuery(QUERY_SINGLE_ITEM, { variables: { id: itemId } });
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  console.info(data)
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
    const id = [];
    id.push(itemIds);
    getCheckout({
      variables: { items: id }
    });
  }

  const tax = (8.25 / 100) * details.price;
  const shipping = (5 / 100) * details.price;
  const total = details.price + tax + shipping;

  return (
    <div>
    <ExternalLink href="https://buy.stripe.com/test_28o9CgcqlgDD7vO7ss">
      <span>Checkout</span>
    </ExternalLink>
    {/* <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button onClick={!stripe}>Checkout</button>
    </form> */}
    </div>
  );
};

export default Checkout;
