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
  // let itemDetails = location.item
  // itemInfo = thing.state
  // itemDetails = itemInfo.image.image.item.category...
  const details = location.state.itemData.item
  console.log('something',details)
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
      <button onClick={submitCheckout}>Checkout</button>
      <p>{details.price}</p>
      <img src={details.image}></img>
    </div>
  );
};

export default Checkout;
