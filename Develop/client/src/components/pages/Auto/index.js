import React from 'react';
import { CCard, CCardBody, CButton } from '@coreui/react';

function Auto() {
  return (
    <div>
      <div className="title">Auto</div>
      <div className="itemContainer">
        <CCard>
          <CCardBody>
            <CButton href="#">Check it out!</CButton>
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
}

export default Auto;
