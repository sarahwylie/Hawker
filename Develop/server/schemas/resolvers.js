// Import dependencies
const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Category, Order } = require('../models');
const { DateTime } = require('./DateTime');

const resolvers = {
  DateTime: DateTime,

  Query: {
    user: async () => {
      return await User.find();
    },
    item: async () => {
      return await Item.find();
    },
    categories: async () => {
      return await Category.find();
    },
    order: async () => {
      return await Order.find();
    }
  },

 

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
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
    },
    // add item
    addItem: async (parent, args) => {
      console.info(args);
      const item = await Item.create(args);

      return item;
    }
  }
};

module.exports = resolvers;
