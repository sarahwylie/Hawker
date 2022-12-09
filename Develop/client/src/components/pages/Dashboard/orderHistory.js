import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../../utils/queries';
function OrderHistory() {
  let userId = localStorage.getItem('userId');

  if (userId) {
    userId = userId.replace(/^"(.*)"$/, '$1');
  }

  const { data } = useQuery(QUERY_SINGLE_USER, { variables: { id: userId } });
  console.info(data);
  const getUserOrders = () => {
    return (
      <div className='container'>
        <div className="orderTitle">
          {data.user.firstName} {data.user.lastName}'s Order History
        </div>
        <div className='orderDiv'>
        {data.user.orders.map((e) => (
          <div key={e._id} className="order-info">
            {' '}
            <p>title - {e.items[0].title}</p>
            <p>Purchase Date - {e.purchaseDate}</p>
            <p>orderId - {e._id}</p>
          </div>
        ))}
        </div>
        
      </div>
    );
  };

  return <>{data ? getUserOrders() : <div>You have not placed any orders yet...</div>}</>;
}

export default OrderHistory;
