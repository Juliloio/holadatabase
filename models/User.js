const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  compras: [String],
  precio: Number
});

const User = mongoose.model('Cliente', UserSchema);

module.exports = User;