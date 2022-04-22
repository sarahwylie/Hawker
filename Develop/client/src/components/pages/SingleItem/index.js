import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_ITEM } from '../../../utils/queries';
import { DELETE_ITEM } from '../../../utils/mutations';

function SingleItem() {
  // substring number probably will change we stop hosting on Local host
  let itemId = window.location.href.substring(46);
  const { data } = useQuery(QUERY_SINGLE_ITEM, { variables: { id: itemId } });
  console.info(data);

  let userId = localStorage.getItem('userId')

  const [deleteItem] = useMutation(DELETE_ITEM);

  const handleDeleteItem = async (event) => {
    event.preventDefault();

    const deleteMutation = await deleteItem({
      variables: { id: itemId }
    });
    console.log(deleteMutation);
    window.location.assign('/')
  };

  const saveItem = function () {
    localStorage.setItem('itemData', JSON.stringify(data));
    window.location.assign('/success')
  };

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

                <button onClick={saveItem} className="btn-primary">
                  Checkout
                </button>
              </a>
              {data.item.user._id === userId ? (
                <button onClick={handleDeleteItem} className="btn-primary">
                  Delete Item
                </button>
              ) : (
                null
              )}

            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="itemContainer">{data ? getSingleItemData() : <div>Loading...</div>}</div>;
}

export default SingleItem;
