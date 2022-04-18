import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useStoreContext } from '../../../utils/GlobalState';
import Auth from '../../../utils/auth';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Checkout = () => {
  const [state] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];
    getCheckout({
      variables: { products: productIds }
    });
  }
  return (
    <div>
      <strong>Total: ${calculateTotal()}</strong>
      {Auth.loggedIn() ? (
        <button onClick={submitCheckout}>Checkout</button>
      ) : (
        <span>(log in to check out)</span>
      )}
    </div>
  );
};

export default Checkout;
