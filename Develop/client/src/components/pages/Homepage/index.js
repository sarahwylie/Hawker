import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../../utils/queries';


function Homepage() {
  const { data: itemData } = useQuery(QUERY_ITEMS);
  console.info(itemData);

  // getting item data from the database and mapping to the ui
  const getItemData = () => {
    return itemData.item.map((item) => (
      <CCard key={item._id}>
        <CCardImage orientation="top" src={item.image} alt={item.title} width="100%" />
        <CCardBody>
          <CCardTitle>{item.title}</CCardTitle>
          <CCardText>${item.price}</CCardText>
          <CButton href="#">See Item</CButton>
        </CCardBody>
      </CCard>
    ));
  };

  return <div className="itemContainer">{itemData ? getItemData() : <div>Loading...</div>}</div>;
}

  

//   return (
//     <div>
//       {imagesData.map((image, i) => (
//         <a href="http://localhost:3000" key={i}>
//           <div className="imageGrid">
//             <img {...imagesData[i]} alt={imagesData[i].alt} width="25%" />
//             <p>{image.category}</p>
//           </div>
//         </a>
//       ))}
//       {itemData ? (getItemData()) : <div>Loading...</div>}
      
//     </div>
//   );
//}

export default Homepage;
