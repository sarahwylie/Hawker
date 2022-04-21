// Import dependencies
const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Category, Order, ContactInfo, ShippingDetails } = require('../models');
const { DateTime } = require('./DateTime');
const { signToken } = require('../utils/auth');

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
    // Query all users
    users: async () => {
      return await User.find().populate('items');
    },
    // query one user
    user: async (parent, { _id }) => {
      return User.findOne({ _id })
        .populate({
          path: 'items',
          populate: 'category'
        })
        .populate({
          path: 'orders.items',
          populate: 'category'
        })
        .populate({
          path: 'contactInfo'
        });
    },
    // Query all items
    items: async () => {
      return await Item.find().populate('category').populate('user');
    },
    // query one item
    item: async (parent, { _id }) => {
      return await Item.findOne({ _id }).populate('category').populate('user');
    },
    categories: async () => {
      return await Category.find();
    },
    // Query all orders
    orders: async () => {
      return await Order.find().populate('users').populate('items');
    },
    // Query one order
    order: async (parent, { _id }, context) => {
      const user = await User.findById(context.user._id).populate({
        path: 'orders.items',
        populate: 'category'
      });

      console.info(user.orders[0].items);
      return user.orders.id(_id);
    },
    contactInfo: async () => {
      return await ContactInfo.find();
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ items: args.items });
      const line_items = [];

      const { items } = await order.populate('items').execPopulate();

      for (let i = 0; i < items.length; i++) {
        const item = await stripe.items.create({
          name: items[i].name,
          description: items[i].description,
          images: [`${url}/images/${items[i].image}`]
        });

        const price = await stripe.prices.create({
          item: item.id,
          unit_amount: items[i].price * 100,
          currency: 'usd'
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      const token = signToken(user);
      return { token, user };
    },
    addContact: async (parent, args) => {
      console.info(args);
      const contact = await ContactInfo.create(args);
      return contact;
    },
    addShipping: async (parent, args) => {
      const shipping = await ShippingDetails.create(args);
      return shipping;
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
      return { token, user };
    },
    // add item
    addItem: async (parent, args, context) => {
      if (context.user) {
        // console.info(args);
        const item = await Item.create(args);
        const userItems = new Item(args);
        await User.findByIdAndUpdate(context.user._id, {
          $push: { items: userItems }
        });
        console.info(userItems);
        return userItems, item;
      }
      throw new AuthenticationError('Not logged in');
    },
    deleteItem: async (parent, { _id }, context) => {
      const item = await Item.findByIdAndRemove(_id);

      await Item.findByIdAndDelete(context.user._id, {
        $pull: { items: item }
      });
      return item;
    },
    addOrder: async (parent, { items }, context) => {
      if (context.user) {
        const order = new Order({ items });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order }
        });
        console.info(order);
        return order;
      }
      throw new AuthenticationError('Not logged in');
    }
  }
};

module.exports = resolvers;
