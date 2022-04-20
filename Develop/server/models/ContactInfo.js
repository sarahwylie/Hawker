const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactInfoSchema = new Schema({
  phoneNo: String,
  profilePicture: String,
  street: String,
  city: String,
  state: String,
  zipcode: String,
  userId: {
    type: String,
    unique: true
  }
});

const ContactInfo = mongoose.model('ContactInfo', contactInfoSchema);

module.exports = ContactInfo;
