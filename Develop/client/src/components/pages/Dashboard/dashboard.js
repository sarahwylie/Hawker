import React, {useState} from 'react';
import OrderHistory from './orderHistory';
import { DELETE_ITEM } from '../../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../../utils/queries';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [deleteItem] = useMutation(DELETE_ITEM);
  const [itemId, setItemId] = useState();
  let userId = localStorage.getItem('userId');

  if (userId) {
    userId = userId.replace(/^"(.*)"$/, '$1');
  }

 console.log(itemId)
  const { data } = useQuery(QUERY_SINGLE_USER, { variables: { id: userId } });
  console.log(data);
  
  const handleDeleteItem = async (event) => {
    event.preventDefault();
    
    const deleteMutation = await deleteItem({
      variables: { id: itemId }
    });
    console.log(deleteMutation);
  };

  const getUserListings = () => {
    return (
      <div>
        {data.user.items.map((e) => (
          <CCard key={e._id}>
            <CCardImage orientation="top" src={e.image} alt={e.title} width="100%" />
            <CCardBody>
              <CCardTitle>{e.title}</CCardTitle>
              <CCardText>${e.price}</CCardText>
              <Link to={`/SingleItem/${e._id}`}>
                {' '}
                <CButton>See Item</CButton>
              </Link>
                <CButton onClick={ () => setItemId(e._id)}>Select Item to Delete</CButton>
                <CButton onClick={handleDeleteItem}>Delete Item</CButton>
            </CCardBody>
          </CCard>
        ))}
      </div>
    );
  };

  return (
    <div>
      <OrderHistory />

      <div>YOUR PAST LISTINGS</div>
      <div className="itemContainer">{data ? getUserListings() : <div>Loading...</div>}</div>
      
    </div>
  );
}

export default Dashboard;
