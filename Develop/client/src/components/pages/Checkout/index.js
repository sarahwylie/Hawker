import React from 'react';
import { ExternalLink } from 'react-external-link';
// import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';


const Checkout = () => {
  // const stripe = useStripe();
  // const elements = useElements();

  // const handleSubmit = async (event) => {
  //   // We don't want to let default form submission happen here,
  //   // which would refresh the page.
  //   event.preventDefault();

  //   if (!stripe || !elements) {
  //     // Stripe.js has not yet loaded.
  //     // Make sure to disable form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   const result = await stripe.confirmPayment({
  //     //`Elements` instance that was used to create the Payment Element
  //     elements,
  //     confirmParams: {
  //       return_url: "https://example.com/order/123/complete",
  //     },
  //   });

  //   if (result.error) {
  //     // Show error to your customer (for example, payment details incomplete)
  //     console.log(result.error.message);
  //   } else {
  //     // Your customer will be redirected to your `return_url`. For some payment
  //     // methods like iDEAL, your customer will be redirected to an intermediate
  //     // site first to authorize the payment, then redirected to the `return_url`.
  //   }
  // };

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
