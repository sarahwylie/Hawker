import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ITEM } from '../../../utils/queries';

function SingleItem() {
  // substring number probably will change we stop hosting on Local host
  let itemId = window.location.href.substring(33);
  // console.log(itemId);
  const { data } = useQuery(QUERY_SINGLE_ITEM, { variables: { id: itemId } });
  console.log(data);
  const saveItem = function() {
    localStorage.setItem("itemData",JSON.stringify(data))
  }
  const getSingleItemData = () => {
    return (
      <div className="itemContainer">
        <div className="itemDiv">
          <div className="singleCard">
            <img orientation="top" src={data.item.image} alt={data.item.title} />
          </div>

          <div className="info">
            <div>
              <p>{data.item.title}</p>
            </div>
            <div>
              <p>{data.item.category.name}</p>
            </div>
            <div>
              <p className="itemDescription">{data.item.description}</p>
            </div>
            <div>
              <p>${data.item.price}</p>
            </div>
            <div>
              <a href={`checkout/${data.item._id}`}>
                {' '}
                <button onClick = {saveItem}className="btn-primary">Goto Checkout</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="itemContainer">{data ? getSingleItemData() : <div>Loading...</div>}</div>;
}

export default SingleItem;
