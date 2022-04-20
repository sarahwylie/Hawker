import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// Create a new context item
const StoreContext = createContext();
// Make state data thats passed in as a prop available to all components
const { Provider } = StoreContext;

// Create the initial global state
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    // Category id values depend on object id created when categories are seeded in mongo database
    // if you reseed your database you need to come here and change these values if not you'll have the wrong id when it posts to the server
    categories: [
      { name: 'Outdoor', id: '625f0f41689785261ed71022' },
      { name: 'Auto', id: '625f0f41689785261ed71023' },
      { name: 'Tech', id: '625f0f41689785261ed71024' },
      { name: 'Clothing', id: '625f0f41689785261ed71025' },
      { name: 'Home', id: '625f0f41689785261ed71026' }
    ],
    currentCategory: ''
  });
  // return the StoreContext's <Provider> component with our state object and dispatch the function provided as data for the value prop.
  return <Provider value={[state, dispatch]} {...props} />;
};

// Create a custom function using the useContext() Hook to be used by the components that need the data from StoreProvider
const useStoreContext = () => {
  return useContext(StoreContext);
};

// Export StoreProvider and useStoreContext() functionality
export { StoreProvider, useStoreContext };
