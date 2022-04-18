import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

// Create a new context item
const StoreContext = createContext();
// Make state data thats passed in as a prop available to all components
const { Provider } = StoreContext;
