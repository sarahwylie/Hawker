import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Auth from '../../../utils/auth';
import '../../../assets/css/Singleitem.css';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ITEM } from '../../../utils/queries';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
// import Homepage from '../Homepage';
// import { Modal, Button } from 'react-bootstrap';

function SingleItem() {
  // substring number probably will change we stop hosting on Local host
  let itemId = window.location.href.substring(33);
  console.log(itemId);
  const { loading, error, data } = useQuery(QUERY_SINGLE_ITEM, { variables: { id: itemId } });
  console.log(data);

  const getSingleItemData = () => {
    return (
      <div>
        <CCard>
          <CCardImage orientation="top" src={data.item.image} alt={data.item.title} width="100%" />
          <CCardBody>
            <CCardTitle>{data.item.title}</CCardTitle>
            <CCardText>${data.item.price}</CCardText>
            <Link to={`/SingleItem/${data.item._id}`}>
              {' '}
              <CButton href="checkout">Goto Checkout</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </div>
    );
  };

  return <div className="itemContainer">{data ? getSingleItemData() : <div>Loading...</div>}</div>;
}

export default SingleItem;

// function SingleItemModal(props) {
//   const itemData = props;
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   let item = props.props;

//   return (
//     <div>
//       <>
//         <Button variant="primary" onClick={handleShow}>

//         </Button>
//         <Modal show={show} centered onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title></Modal.Title>
//           </Modal.Header>
//           <Modal.Body></Modal.Body>
//           <Modal.Footer>
//             <p>Price:</p>
//             <div></div>
//             <form>
//               <label>
//                 Quantity:
//                 <input type="text" name="name" />
//               </label>
//             </form>
//             <Button variant="secondary" onClick={handleClose}>
//               Back to Items
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Buy Me
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     </div>
//   );
// }
