import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Buyer from './pages/Buyer';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostItem from './pages/PostItem';
import Seller from './pages/Seller';
import SingleItem from './pages/SingleItem';

function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Homepage');

  const renderPage = () => {
    if (currentPage === 'Buyer') {
      return <Buyer />;
    }
    if (currentPage === 'Checkout') {
      return <Checkout />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Signup') {
      return <Signup />;
    }
    if (currentPage === 'PostItem') {
      return <PostItem />;
    }
    if (currentPage === 'Seller') {
      return <Seller />;
    }
    if (currentPage === 'SingleItem') {
      return <SingleItem />;
    }
    return <Homepage />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div>{renderPage()}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PageContainer;
