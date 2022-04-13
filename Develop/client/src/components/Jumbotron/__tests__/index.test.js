// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Jumbotron from '..';

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('Jumbotron component', () => {
  // verify the component is rendering properly
  it('Jumbotron component renders', () => {
    render(<Jumbotron />);
  });

  // compare snapshot versions of the DOM node structure
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Jumbotron />);
    expect(asFragment()).toMatchSnapshot();
  });
});