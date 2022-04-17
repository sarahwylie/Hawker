import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import imagesData from './imagesData.json';

function Outdoor() {
  return (
    <div><div className='title'>
      Outdoor
    </div>
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
    </div>
  );
};

export default Outdoor;
