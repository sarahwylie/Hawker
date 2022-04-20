const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 1.0
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
