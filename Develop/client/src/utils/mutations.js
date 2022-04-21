import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $password: String!, $email: String!) {
    addUser(firstName: $firstName, lastName: $lastName, password: $password, email: $email) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem(
    $title: String!
    $description: String!
    $image: String!
    $price: Float!
    $quantity: Int!
    $category: ID!
    $user: ID!
  ) {
    addItem(
      title: $title
      description: $description
      image: $image
      price: $price
      quantity: $quantity
      category: $category
      user: $user
    ) {
      title
      description
      image
      price
      quantity
      category {
        name
        _id
      }
    }
  }
`;

export const DELETE_ITEM = gql`
mutation deleteItem($id: ID!) {
  deleteItem(_id: $id) {
    _id
  }
}
`;

export const ADD_ORDER = gql`
  mutation addOrder($purchaseDate: DateTime, $item: ID!, $user: ID!) {
    addOrder(purchaseDate: $purchaseDate, users: $user, items: $item) {
      purchaseDate
      _id
      users {
        _id
        lastName
      }
      items {
        _id
      }
    }
  }
`;
