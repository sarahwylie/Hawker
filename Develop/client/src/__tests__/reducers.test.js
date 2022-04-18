// import our actions
import { UPDATE_PRODUCTS, UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../utils/actions';

// create a sample of what our global state will look like
const initialState = {
  products: [], // empty list of products
  categories: [{ name: 'Food' }], // single category in a list
  currentCategory: '1' // current category
};

test('UPDATE_PRODUCTS', () => {
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}]
  });

  // make sure the newState didnt affect the initialState in any way
  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});
