import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import '../../../assets/css/Singleitem.css';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ITEM } from '../../../utils/queries';
import imagesData from '../Auto';


function SingleItemModal() {
  
  { 

  return (
    <div className='modalBackdrop'>
        <div className='modalContainer'>
          <h3 className='modalTitle'>Item Title</h3>
              <img src={imagesData}></img>
                <p>lorem ipsum</p>
              
                <button type="button">Back to Items</button>
                <button type="button">Buy Me</button>
              </div>
          </div>
  )};

}

export default SingleItemModal;
