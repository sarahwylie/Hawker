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
      <div className="itemContainer">
        <div>
          {data.user.firstName} {data.user.lastName}'s Order History
        </div>
        {data.user.orders.map((e) => (
          <div key={e._id}>
            {' '}
            title - {e.items[0].title}
            Purchase Date - {e.purchaseDate} orderId - {e._id}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      Order History
      <div>
        <div className="itemContainer">
          {data ? getUserOrders() : <div>You have not placed any orders yet...</div>}
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
