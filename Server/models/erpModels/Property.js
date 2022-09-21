const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('events').EventEmitter.prototype._maxListeners = 0;

const PropertySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  ownerName: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Active', 'InActive'],
    default: 'InActive',
  },
  address: {
    type: String,
  },
  society: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Society',
    autopopulate: true,
    required: true,
  },
  phase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Phase',
    autopopulate: true,
    required: true,
  },
  block: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Block',
    autopopulate: true,
    required: true,
  },

}, { timestamps: true });
PropertySchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Property', PropertySchema);
