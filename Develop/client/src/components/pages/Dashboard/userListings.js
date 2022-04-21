import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../../utils/queries';




function Seller() {
    let userId = localStorage.getItem('userId');
   
    if(userId) {
      userId = userId.replace(/^"(.*)"$/, '$1');
    }

    const { data } = useQuery(QUERY_SINGLE_USER, {variables: {id: userId}})
    
    
    const getUserListing = () => {
        
        return (
            <div>
                <div>
                    {data.user.firstName} {data.user.lastName}'s Listings
                </div>
            <div>
            {data.user.items.map((e) => (
          <div key={e._id}> 
            {' '}
            Title - {e.title} Price - {e.price} Description - {e.description}
          </div>
        ))}
            </div>
            </div>
        );
    };

    

    return ( 
        <div>Listings
            <div> 
                <div className='itemContainer'>{ data ? getUserListing() : <div>Loading...</div>}</div>
            </div>
        </div>
    );
}



export default Seller;