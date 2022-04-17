import React, { useState} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../../utils/queries';
import imagesData from './imagesData.json';
import SingleItemModal from '../SingleItem';
import { Modal, Button } from 'react-bootstrap';

function Homepage() {
  const { data: itemData } = useQuery(QUERY_ITEMS);
  console.info(itemData);

  // getting item data from the database and mapping to the ui
  const getItemData = () => {
    return itemData.item.map((item) => (
      <div className="card" key={item._id}>
        <div>{item.description}</div> 
        <div>{item.price}</div>
        <div>{item.quantity}</div>
        <div>{item.image}</div>
        <div>{item.category.name}</div>
      </div>
    ));
  };

  let item = itemData
  if(itemData){
  return (
    <div>
        {itemData.item.map((item) => {

            {return <div>
                <p>{item.category.name}</p>
                <SingleItemModal props={item}></SingleItemModal>
                </div>}

        })}
    </div>
      
  );
}
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
