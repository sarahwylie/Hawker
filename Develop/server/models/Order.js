const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }],
  users: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
