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
    email: String
    orders: [Order]
  }

  scalar DateTime

  type Order {
    purchaseDate: DateTime
    items: Item
    users: User
    _id: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    categories: [Category]
    item(category: ID, name: String): [Item]
    users: [User]
    user(_id: ID!): User
    order: [Order]
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth

    addOrder(purchaseDate: DateTime, items: ID!, users: ID!): Order

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
