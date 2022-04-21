import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { StoreProvider } from './utils/GlobalState';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Login from './components/pages/Login/index';
import Signup from './components/pages/Signup/index';
import Homepage from './components/pages/Homepage/index';
import Checkout from './components/pages/Checkout/index';
import PostItem from './components/pages/PostItem/index';
import SingleItem from './components/pages/SingleItem/index';
import NoMatch from './components/pages/NoMatch/index';
import Success from './components/pages/Success/success';
import './assets/css/index.css';
import Dashboard from './components/pages/Dashboard/dashboard';

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
  const [isLogin, setIsLogin] = useState(false);
  // const [filterTerm, setFilterTerm] = useState('');

  const toggle = (whichButton) => {
    setIsLogin(whichButton);
  };

  // const handleChange = (event) => {
  //   setFilterTerm(event);
  // };

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header isLogin={isLogin} /*handleChange={handleChange}*/ />
        <StoreProvider>
          <Routes>
            <Route exact path="/" element={<Homepage /*filterTerm={filterTerm} */ />} />
            <Route exact path="/login" element={<Login toggle={toggle} />} />
            <Route exact path="/signup" element={<Signup toggle={toggle} />} />
            <Route
              exact
              path="singleItem/checkout/:id"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/success"
              element={
                <PrivateRoute>
                  <Success />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/singleItem/:id"
              element={
                <PrivateRoute>
                  <SingleItem />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/postItem"
              element={
                <PrivateRoute>
                  <PostItem />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/success"
              element={
                <PrivateRoute>
                  <Success />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </StoreProvider>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
