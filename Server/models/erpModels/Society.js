const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const societSchema = new mongoose.Schema({
  name: {
    type: String,
    default: false,
  },
  ownerName: {
    type: String,
    // default: false,
  },
  address: {
    type: String,
    trim: true,
  },
  managerName: {
    type: String,
    trim: true,
  },
  Status: {
    type: String,
    trim: true,
  },
  photo: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Society', societSchema);
