const mongoose = require('mongoose');

const { Schema } = mongoose;

const shippingDetailsSchema = new Schema({
  fullname: String,
  phoneNo: String,
  street: String,
  city: String,
  state: String,
  zipcode: String,
  userId: {
    type: String,
    unique: true
  }
});

const ShippingDetails = mongoose.model('ShippingDetails', shippingDetailsSchema);

module.exports = ShippingDetails;
