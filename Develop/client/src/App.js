import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index'
import Auto from './components/pages/Auto/index';
import Clothing from './components/pages/Clothing/index';
import Homepage from './components/pages/Homepage/index'
import Household from './components/pages/Household/index';
import Outdoor from './components/pages/Outdoor/index';
import Tech from './components/pages/Tech/index';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './assets/css/App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/auto' component={Auto} />
          <Route exact path='/clothing' component={Clothing} />
          <Route exact path='/household' component={Household} />
          <Route exact path='/outdoor' component={Outdoor} />
          <Route exact path='/tech' component={Tech} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
      </>
    </Router>
    <Footer />
    </ApolloProvider>
  );
}

export default App;
