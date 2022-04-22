import React from 'react';
import OrderHistory from './orderHistory';
import Seller from './userListings';
import userProfile from './userProfile';



function Dashboard() {

    
    return ( <div>
        <userProfile/>
        <OrderHistory/>
        <Seller/>
        </div> );
}

export default Dashboard;