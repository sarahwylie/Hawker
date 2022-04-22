import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../../utils/queries';



function userProfile() {

    let userId = localStorage.getItem('userId');
   
    if(userId) {
      userId = userId.replace(/^"(.*)"$/, '$1');
    }

    const { data } = useQuery(QUERY_SINGLE_USER, {variables: {id: userId}})

    return (
        <div>
            <div>
                    {data.user.firstName} {data.user.lastName}'s Listings
            </div>
       </div>
    );
}

export default userProfile;