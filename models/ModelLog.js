const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  time: Date,
  itemid: String,
  itemtitle: String
});

const ModelLog = mongoose.model('logs', LogSchema);

module.exports = ModelLog;

