import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ITEM } from '../../../utils/queries';

function SingleItem() {
  // substring number probably will change we stop hosting on Local host
  let itemId = window.location.href.substring(33);
  console.log(itemId);
  const { data } = useQuery(QUERY_SINGLE_ITEM, { variables: { id: itemId } });
  console.log(data);

  const getSingleItemData = () => {
    return (
      <div>
        <CCard>
          <CCardImage orientation="top" src={data.item.image} alt={data.item.title} width="100%" />
          <CCardBody>
            <CCardTitle>{data.item.title}</CCardTitle>
            <CCardText>${data.item.price}</CCardText>
            {/* <Link to='/Checkout/' state={{ data: data}}> */}
            <Link to={ "/Checkout"} state = {{ itemData: data }} >
              {' '}
              <CButton>Go to Checkout</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </div>
    );
  };

  return <div className="itemContainer">{data ? getSingleItemData() : <div>Loading...</div>}</div>;
}

export default SingleItem;
