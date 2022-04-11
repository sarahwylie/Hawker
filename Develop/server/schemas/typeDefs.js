const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define User mutation
  type User {
    _id: ID
    username: String
    email: String
  }

  type Query {
    me: User
    users: [User]
  }
  # Define mutations
  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
