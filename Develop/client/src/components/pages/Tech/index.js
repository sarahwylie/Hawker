import React from 'react';
import { CCard, CCardBody, CButton } from '@coreui/react';

function Tech() {
  return (
    <div>
      <div className="title">Tech</div>
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

export default Tech;
