const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PhaseSchema = new mongoose.Schema({
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
});
PhaseSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Phase', PhaseSchema);
