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
    orders: async () => {
      return await Order.find();
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return { user };
    },
    login: async (parent, {email}) => {
      const user = await User.findOne({ email });

      return { user };
    }
  }
};

module.exports = resolvers;
