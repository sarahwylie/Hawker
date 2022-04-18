import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_ITEM } from '../../../utils/queries';


function Seller() {
  const {data: itemData } = useQuery(QUERY_USER_ITEM);
  
  return (
    <div>
      <h2>Your Listings</h2>
      
    </div>
  );
}

export default Seller;
