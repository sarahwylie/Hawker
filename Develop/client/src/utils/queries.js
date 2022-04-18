import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  query users {
    users {
      _id
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      _id
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query oneUser($id: ID!) {
    user(_id: $id) {
      firstName
      lastName
    }
  }
`;

export const QUERY_ITEMS = gql`
  query items {
    items {
      _id
      description
      image
      title
      price
      quantity
      category {
        _id
        name
      }
    }
  }
}
`

export const QUERY_CHECKOUT = gql`
  query getCheckout($items: [ID]!) {
    checkout(items: $items) {
      session
`;
export const QUERY_SINGLE_ITEM = gql`
  query item($id: ID!) {
    item(_id: $id) {
      title
      _id
      description
      image
      price
      quantity
      category {
        _id
        name
      }
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;
