import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Login from './components/pages/Login/index';
import Signup from './components/pages/Signup/index';
import Buyer from './components/pages/Buyer/index';
import Auto from './components/pages/Auto/index';
import Clothing from './components/pages/Clothing/index';
import Homepage from './components/pages/Homepage/index';
import Household from './components/pages/Household/index';
import Outdoor from './components/pages/Outdoor/index';
import Tech from './components/pages/Tech/index';
import Checkout from './components/pages/Checkout/index';
import PostItem from './components/pages/PostItem/index';
import SingleItem from './components/pages/SingleItem/index';
import Seller from './components/pages/Seller/index';
import NoMatch from './components/pages/NoMatch/index';
import './assets/css/App.css';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/buyer" element={<Buyer />} />
            <Route exact path="/auto" element={<Auto />} />
            <Route exact path="/clothing" element={<Clothing />} />
            <Route exact path="/household" element={<Household />} />
            <Route exact path="/outdoor" element={<Outdoor />} />
            <Route exact path="/tech" element={<Tech />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/singleItem" element={<SingleItem />} />
            <Route exact path="/postItem" element={<PostItem />} />
            <Route exact path="/seller" element={<Seller />} />
            <Route element={<NoMatch />} />
          </Routes>
        </>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
