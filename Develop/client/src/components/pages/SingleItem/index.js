import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import Hawker from '../../../assets/images/icons/Hawker.svg';
import '../../../assets/css/Singleitem.css';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ITEM } from '../../../utils/queries';

function SingleItemModal() {
  
  { 

  return (
    <div className='modalBackdrop'>
        <div className='modalContainer'>
          <h2>Item Title</h2>
              <p>{}</p>
      <button type="button">Back to Items</button>
      <button type="button">Buy Me</button>
      </div>
    </div>
  );
}
}

export default SingleItemModal;
