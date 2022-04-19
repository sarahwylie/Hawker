import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import Confirmation from '../Confirmation';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Checkout = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

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

  return (
    <div>
      <Confirmation></Confirmation>
      <button onClick={submitCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
