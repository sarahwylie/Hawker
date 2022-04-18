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
    categories: [],
    currentCategory: ''
  });
  // use this to confirm it works!
  console.log(state);
  // return the StoreContext's <Provider> component with our state object and dispatch the function provided as data for the value prop.
  return <Provider value={[state, dispatch]} {...props} />;
};

// Create a custom function using the useContext() Hook to be used by the components that need the data from StoreProvider
const useStoreContext = () => {
  return useContext(StoreContext);
};

// Export StoreProvider and useStoreContext() functionality
export { StoreProvider, useStoreContext };
