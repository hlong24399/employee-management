const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const contact = new Schema({
  userName: String,
  email: String,
  age: Number,
  phone: Number,
  experience: Number,
  country: String,
});

const contactModel = mongoose.model("contacts", contact);

module.exports = contactModel;
