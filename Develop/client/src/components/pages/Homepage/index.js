import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../../utils/queries';

import imagesData from './imagesData.json';

function Homepage() {
  const { data: itemData } = useQuery(QUERY_ITEMS);
  console.info(itemData);

  // getting item data from the database and mapping to the ui
  const getItemData = () => {
    // return itemData.item.map((item) => (
    //   <CCard key={item._id}>
    //     <CCardImage orientation="top" src={item.image} alt={item.title} width="100%" />
    //     <CCardBody>
    //       <CCardTitle>{item.title}</CCardTitle>
    //       <CCardText>${item.price}</CCardText>
    //       <CButton href="#">See Item</CButton>
    //     </CCardBody>
    //   </CCard>
    // ));
    return (
      <div className="itemContainer">
        {imagesData.map((image, i) => (
          <CCard key={i}>
            <CCardImage orientation="top" {...imagesData[i]} alt={imagesData[i].alt} width="100%" />
            <CCardBody>
              <CCardTitle>{imagesData[i].alt}</CCardTitle>
              <CCardText>{imagesData[i].category}</CCardText>
              <CCardText>{imagesData[i].description}</CCardText>

              <CButton href="#">Purchase</CButton>
            </CCardBody>
          </CCard>
        ))}
      </div>
    );
  };

  return <div className="itemContainer">{itemData ? getItemData() : <div>Loading...</div>}</div>;
}

export default Homepage;
