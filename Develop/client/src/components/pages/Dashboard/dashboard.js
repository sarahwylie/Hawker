import React from 'react';
import OrderHistory from './orderHistory';

import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../../utils/queries';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';


function Dashboard() {
  let userId = localStorage.getItem('userId');

  if (userId) {
    userId = userId.replace(/^"(.*)"$/, '$1');
  }

  const { data } = useQuery(QUERY_SINGLE_USER, { variables: { id: userId } });
  console.info(data);

  const getUserListings = () => {
    return (
      <>
        {data.user.items.map((e) => (
          <CCard key={e._id}>
            <CCardImage orientation="top" src={e.image} alt={e.title} width="100%" />
            <CCardBody>
              <CCardTitle>{e.title}</CCardTitle>
              <CCardText>${e.price}</CCardText>
            </CCardBody>
          </CCard>
        ))}
      </>
    );
  };

  return (
   
    <div>
      <OrderHistory />

      <div>YOUR PAST LISTINGS</div>
      <div className="itemContainer">
        {data ? getUserListings() : <div>You have not posted any items for sale yet...</div>}
      </div>
    </div>
    
  );
}

export default Dashboard;
