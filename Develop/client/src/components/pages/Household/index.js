import React from 'react';
import { CCard, CCardBody, CButton } from '@coreui/react';

function Household() {
  return (
    <div>
      <div className="title">Household</div>
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

export default Household;
