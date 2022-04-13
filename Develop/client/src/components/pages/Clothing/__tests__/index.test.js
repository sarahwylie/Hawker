// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Clothing from '..';

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('Clothing component', () => {
  // verify the component is rendering properly
  it('Clothing component renders', () => {
    render(<Clothing />);
  });

  // compare snapshot versions of the DOM node structure
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Clothing />);
    expect(asFragment()).toMatchSnapshot();
  });
});