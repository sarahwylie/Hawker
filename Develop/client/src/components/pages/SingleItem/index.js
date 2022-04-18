import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';
import '../../../assets/css/Singleitem.css';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ITEM } from '../../../utils/queries';
import Homepage from '../Homepage';
import { Modal, Button } from 'react-bootstrap';

function SingleItemModal(props) {
  const itemData = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let item = props.props;

  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          
        </Button>
        <Modal show={show} centered onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <p>Price:</p>
            <div></div>
            <form>
              <label>
                Quantity:
                <input type="text" name="name" />
              </label>
            </form>
            <Button variant="secondary" onClick={handleClose}>
              Back to Items
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Buy Me
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default SingleItemModal;
