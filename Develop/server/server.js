const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  // starting the apollo server
  await server.start();

  server.applyMiddleware({ app });

  // eslint-disable-next-line no-console
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};
startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API server running on port ${PORT}!`);
  });
});
