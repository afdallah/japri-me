const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    requred: 'You must supply an email'
  },
  password: {
    type: String,
    required: 'You must supply a password',
  }
}, {
  versionKey: false,
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;

