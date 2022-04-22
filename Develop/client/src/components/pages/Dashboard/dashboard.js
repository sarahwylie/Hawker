import React from 'react';
import OrderHistory from './orderHistory';
import Seller from './userListings';
import UserProfile from './userProfile';



function Dashboard() {

    
    return ( <div>
        <UserProfile/>
        <OrderHistory/>
        <Seller/>
        </div> );
}

export default Dashboard;