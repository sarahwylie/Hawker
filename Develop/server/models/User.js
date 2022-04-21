const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const Order = require('./Order');
const Item = require('./Item');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
  orders: [Order.schema],
  items: [Item.schema],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  contactInfo: {
    type: Schema.Types.ObjectId,
    ref: 'contactInfo'
  },
  shippingDetails: {
    type: Schema.Types.ObjectId,
    ref: 'contactInfo'
  }
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
