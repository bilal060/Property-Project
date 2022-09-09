const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const BlockSchema = new mongoose.Schema({
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

});
BlockSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Block', BlockSchema);
