import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../../utils/queries';

// import imagesData from './imagesData.json';
// import SingleItemModal from '../SingleItem';
// import { Modal, Button } from 'react-bootstrap';

function Homepage() {
  const { data: itemData } = useQuery(QUERY_ITEMS);
  console.info(itemData);

  // getting item data from the database and mapping to the ui
  const getItemData = () => {
    return itemData.items.map((item) => (
      <CCard key={item._id}>
        <CCardImage orientation="top" src={item.image} alt={item.title} width="100%" />
        <CCardBody>
          <CCardTitle>{item.title}</CCardTitle>
          <CCardText>${item.price}</CCardText>
         <Link to={`/SingleItem/${item._id}`}> <CButton href="singleItem">See Item</CButton></Link>
        </CCardBody>
      </CCard>
    ));
  };

  return <div className="itemContainer">{itemData ? getItemData() : <div>Loading...</div>}</div>;
}

  
    //   <div className="card" key={item._id}>
    //     <div>{item.description}</div>
    //     <div>{item.price}</div>
    //     <div>{item.quantity}</div>
    //     <div>{item.image}</div>
    //     <div>{item.category.name}</div>
    //     </div>
    // )
    /* // return itemData.item.map((item) => (
    //   <CCard key={item._id}>
    //     <CCardImage orientation="top" src={item.image} alt={item.title} width="100%" />
    //     <CCardBody>
    //       <CCardTitle>{item.title}</CCardTitle>
    //       <CCardText>${item.price}</CCardText>
    //       <CButton href="#">See Item</CButton>
    //     </CCardBody>
    //   </CCard>
    // )); */

//     return (
//       <div className="itemContainer">
//         {imagesData.map((image, i) => (
//           <CCard key={i}>
//             <CCardImage orientation="top" {...imagesData[i]} alt={imagesData[i].alt} width="100%" />
//             <CCardBody>
//               <CCardTitle>{imagesData[i].alt}</CCardTitle>
//               <CCardText>{imagesData[i].category}</CCardText>
//               <CCardText>{imagesData[i].description}</CCardText>

//               <CButton href="#">Check it out!</CButton>
//             </CCardBody>
//           </CCard>
//         ))}
//       </div>
//     );
//   };
//     )

//   let item = itemData;
//   if (itemData) {
//     return (
//       <div>
//         {itemData.item.map((item) => {
//           {
//             return (
//               <div>
//                 <p>{item.category.name}</p>
//                 <SingleItemModal props={item}></SingleItemModal>
//               </div>
//             );
//           }
//         })}
//       </div>
//     );
//   }
//   return <div className="itemContainer">{itemData ? getItemData() : <div>Loading...</div>}</div>;
//  }
// }

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
