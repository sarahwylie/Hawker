import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auto from './pages/Auto';
import Clothing from './pages/Clothing';
import Household from './pages/Household';
import Outdoor from './pages/Outdoor';
import Tech from './pages/Tech';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
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
          <Route exact path='/' component={Home} />
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
