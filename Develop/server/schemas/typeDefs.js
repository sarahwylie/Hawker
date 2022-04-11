const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
    category: Category
  }

  type Category {
    name: String
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

  type Query {
    categories: [Category]
    item: [Item]
    user: [User]
    orders: [Order]
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(firstName: String!, lastName: String!, email: String!, userName: String!, password: String!, address: String!): User
    
    
  }
`;

module.exports = typeDefs;
