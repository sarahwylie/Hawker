const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
  _id: ID
  name: String
}

  type Item {
    _id: ID
    title: String!
    description: String!
    image: String
    price: Float
    quantity: Int
    category: Category
  }


  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    address: String
  }

  scalar DateTime

  type Order {
    purchaseDate: DateTime
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    categories: [Category]
    item(category: ID, name: String): [Item]
    user: [User]
    orders: [Order]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      userName: String!
      password: String!
      address: String!
    ): Auth

    addItem(
      title: String
      description: String
      image: String
      price: Float
      quantity: Int
      category: ID
    ): Item
  }
`;

module.exports = typeDefs;
