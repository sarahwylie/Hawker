import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../../utils/queries';
function OrderHistory() {
  let userId = localStorage.getItem('userId');

  if (userId) {
    userId = userId.replace(/^"(.*)"$/, '$1');
  }

  const { error, loading, data } = useQuery(QUERY_SINGLE_USER, { variables: { id: userId } });

  const getUserOrders = () => {
    return (
      <div>
        <div>
          {data.user.firstName} {data.user.lastName}'s Order History
        </div>
        {data.user.orders.map((e) => (
          <div key={e._id}>
            {' '}
            Purchase Date - {e.purchaseDate} orderId - {e._id}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
<<<<<<< HEAD
     <div className="itemContainer">{data ? getUserOrders() : <div>Loading...</div>}</div>
=======
      Order History
      <div>
        return <div className="itemContainer">{data ? getUserOrders() : <div>Loading...</div>}</div>
        ;
      </div>
>>>>>>> 2a1b3f754def524cfe3cb29503560bc513b1cc47
    </div>
  );
}

export default OrderHistory;
