// Import dependencies
const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Category, Order } = require('../models');
const { DateTime } = require('./DateTime');
const { signToken } = require('../utils/auth'); // Import signToken() function from utils/auth.js

const resolvers = {
  DateTime: DateTime,

  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        console.info(userData);
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return await User.find();
    },
    // query one user
    user: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
    // item query
    item: async () => {
      return await Item.find().populate('category');
    },
    categories: async () => {
      return await Category.find();
    },
    order: async () => {
      return await Order.find().populate('users').populate('items');
    }
    // uploads: (parents, args) => {}
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      console.info(user, token);
      return { token, user };
    },
    // add item
    addItem: async (parent, args) => {
      console.info(args);
      const item = await Item.create(args);

      return item;
    },
    addOrder: async (parent, args) => {
      const order = await Order.create(args);
      console.info(order);
      return order;
    }
  }
};

module.exports = resolvers;
