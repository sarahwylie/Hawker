import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../../utils/queries';


function UserProfile() {
    let userId = localStorage.getItem('userId');
   
    if(userId) {
      userId = userId.replace(/^"(.*)"$/, '$1');
    }

    const { data } = useQuery(QUERY_SINGLE_USER, {variables: {id: userId}})
    
    
    const getUserName = () => {
        
        return (
            <div>
                <div>
                    {data.user.firstName} {data.user.lastName}'s Dashboard
                </div>
            </div>
        );
    };

    

    return ( 
        <div>
            <div> 
                <div className='itemContainer'>{ data ? getUserName() : <div>Loading...</div>}</div>
            </div>
        </div>
    );
}


export default UserProfile;