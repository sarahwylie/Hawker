import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import '../../../assets/css/Singleitem.css';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ITEM } from '../../../utils/queries';
import imagesData from '../../pages/Homepage/imagesData.json';

function SingleItemModal() {
  
  // { 

  // return (
  //   <div className='modalBackdrop'>
  //       <div className='modalContainer'>
  //         <h2>Item Title</h2>
  //         {imagesData.map((image, i) => (
  //           <><a href="http://localhost:3000" key={i}>
  //             <div>
  //               <img {...imagesData[i]} alt={imagesData[i].alt} width="25%" />
  //               <p>{image.category}</p>
  //             </div>
  //           </a><div>
  //               <button type="button">Back to Items</button>
  //               <button type="button">Buy Me</button>
  //             </div></>
  //         </div>
  //   </div>
  // )};

}

export default SingleItemModal;
