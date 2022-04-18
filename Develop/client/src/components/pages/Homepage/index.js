import React, { useState } from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../../utils/queries';

// import imagesData from './imagesData.json';
// import SingleItemModal from '../SingleItem';
// import { Modal, Button } from 'react-bootstrap';

function Homepage() {
  const { data: itemData } = useQuery(QUERY_ITEMS);
  console.info(itemData);

  // getting item data from the database and mapping to the ui
  const getItemData = () => {
    return itemData.items.map((item) => (
      <CCard key={item._id}>
        <CCardImage orientation="top" src={item.image} alt={item.title} width="100%" />
        <CCardBody>
          <CCardTitle>{item.title}</CCardTitle>
          <CCardText>${item.price}</CCardText>
          <Link to={`/SingleItem/${item._id}`}>
            {' '}
            <CButton>See Item</CButton>
          </Link>
        </CCardBody>
      </CCard>
    ));
  };
  return <div className="itemContainer">{itemData ? getItemData() : <div>Loading...</div>}</div>;
}
// return itemData.item.map((item) => (
//    <CCard key={item._id}>
//      <CCardImage orientation="top" src={item.image} alt={item.title} width="100%" />
//      <CCardBody>
//        <CCardTitle>{item.title}</CCardTitle>
//        <CCardText>${item.price}</CCardText>
//       <CButton href="#">See Item</CButton>
//      </CCardBody>
//    </CCard>
//  ));

//   let item = itemData;

//   if (itemData) {

// return (
//       <div>
//         {itemData.item.map((item) => {
//           {
//             return (
//               <div>
//                 <p>{item.category.name}</p>
//                 <SingleItemModal props={item}></SingleItemModal>
//               </div>
//             );
//           }
//         })}
//       </div>
//     );
//   }

export default Homepage;
