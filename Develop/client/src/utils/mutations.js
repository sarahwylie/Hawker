import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $password: String!, $email: String!) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      password: $password
      email: $email
    ) {
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
    $price: String!
    $quanity: Number!
    $category: String!
  ) {
    addItem(
      title: $title
      description: $description
      image: $image
      price: $price
      quanity: $quanity
      category: $category
    ) {
      token
      user {
        _id
      }
    }
  }
`;
