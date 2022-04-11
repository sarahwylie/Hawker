const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define mutations
  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
