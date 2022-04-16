import { gql } from '@apollo/client';

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

<<<<<<< HEAD
export const QUERY_SINGLE_ITEM = gql`
  query singleItem($id: ID!) {
    item(_id: $id) {
      _id
      title
      description
      image
      price
      quantity
      user {
        _id
      }
      category {
        _id
      }
    }
  }`

=======
export const QUERY_ITEMS = gql`
query items {
  item {
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
`
>>>>>>> 413c5bccf13463e1765be18c9c258cff4ebf8477
