import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import imagesData from './imagesData.json';
import { idbPromise } from '../../../utils/helpers';

function Auto() {
  return (
    <div>
      <div className="title">Auto</div>
      <div className="itemContainer">
        {imagesData.map((image, i) => (
          <CCard key={i}>
            <CCardImage orientation="top" {...imagesData[i]} alt={imagesData[i].alt} width="100%" />
            <CCardBody>
              <CCardTitle>{imagesData[i].alt}</CCardTitle>
              <CCardText>{imagesData[i].category}</CCardText>
              <CButton href="#">Check it out!</CButton>
            </CCardBody>
          </CCard>
        ))}
      </div>
    </div>
  );
}

export default Auto;
