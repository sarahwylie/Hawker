const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  // starting the apollo server
  await server.start();

  server.applyMiddleware({ app });
  console.info(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};
startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.info(`API server running on port ${PORT}!`);
  });
});

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    Item: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{Item.price}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://localhost:3000/success',
    cancel_url: 'https://localhost:3000/cancel',
  });

  res.redirect(303, session.url);
});