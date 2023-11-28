const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  intro: String,
  logo: String,
  bio: String,
  status: String,
  sector: String,
  investmentYear:Int32Array,
  region: String

  // ... other fields
});

// Create the User model based on the schema
const User = mongoose.model('Comp', userSchema);

module.exports = User;
