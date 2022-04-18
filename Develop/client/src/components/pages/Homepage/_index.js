import React, { useState} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../../utils/queries';
import imagesData from './imagesData.json';
import SingleItemModal from '../SingleItem';

function Homepage() {
  const { data: itemData } = useQuery(QUERY_ITEMS);
  console.info(itemData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();


  // getting item data from the database and mapping to the ui
  const getItemData = () => {
    return itemData.item.map((item) => (
      <div className="card" key={item._id} onClick={() => toggleModal}>
        <div>{item.description}</div> 
        <div>{item.price}</div>
        <div>{item.quantity}</div>
        <div>{item.image}
        
        </div>
      </div>
    ));
  };

  

  return (
    <div>
      {imagesData.map((image, i) => (
        <a href="http://localhost:3000" key={i}>
          <div className="imageGrid">
            <img {...imagesData[i]} alt={imagesData[i].alt} width="25%" />
            <p>{image.category}</p>
          </div>
        </a>
      ))}
      {itemData ? (getItemData()) : <div>Loading...</div>}
      
    </div>
  );
}

export default Homepage;
