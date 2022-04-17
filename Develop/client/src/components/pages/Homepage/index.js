import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { useQuery } from '@apollo/client'
import imagesData from './imagesData.json';
import { Card } from 'react-bootstrap';
import { QUERY_ITEMS } from '../../../utils/queries'

function Homepage() {
  const { data: itemData } = useQuery(QUERY_ITEMS);
  console.info(itemData);

  // getting item data from the database and mapping to the ui
  const getItemData = () => {
    return itemData.item.map((item) => (
      <Card key={item._id}>
        <div>{item.description}</div>
        <div>{item.price}</div>
        <div>{item.quantity}</div>
        <Card.Img src={item.image} />
      </Card>
    ));
  };

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
      {itemData ? getItemData() : <div>Loading...</div>}
    </div>
  );
}

export default Homepage;
