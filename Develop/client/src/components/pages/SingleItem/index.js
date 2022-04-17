import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import '../../../assets/css/Singleitem.css';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ITEM } from '../../../utils/queries';
import Homepage from '../Homepage';
import { Modal, Button } from 'react-bootstrap';


function SingleItemModal(props) {
  const itemData = props
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let item = props.props

    return (
      <div>
        {console.log(item)}
      {/* {item ? ( */}
          <><Button variant="primary" onClick={handleShow}>
                  {item.title}
              </Button><Modal show={show} centered onHide={handleClose}>
                      <Modal.Header closeButton>
                      <Modal.Title>{item.title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{item.description}</Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                              Back to Items
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                              Buy Me
                          </Button>
                      </Modal.Footer>
                  </Modal></>
          </div>
      
  );

}

export default SingleItemModal;
