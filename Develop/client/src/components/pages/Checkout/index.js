import React from 'react';
// import { useLazyQuery, useQuery } from '@apollo/client';
// import { QUERY_CHECKOUT, QUERY_SINGLE_ITEM } from '../../../utils/queries';
// import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Checkout = () => {
  // substring number probably will change we stop hosting on Local host
  // let itemId = window.location.href.substring(42);
  // const itemIds = useQuery(QUERY_SINGLE_ITEM, { variables: { id: itemId } });
  // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // useEffect(() => {
  //   if (data) {
  //     stripePromise.then((res) => {
  //       res.redirectToCheckout({ sessionId: data.checkout.session });
  //     });
  //   }
  // }, [data]);

  // function submitCheckout() {
  //   const id = [];
  //   id.push(itemIds);
  //   getCheckout({
  //     variables: { items: id }
  //   });
  // }

  return (
    <div>
      <form action="/create-checkout-session" method="POST">
        <button type="submit" id="checkout-button">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;
