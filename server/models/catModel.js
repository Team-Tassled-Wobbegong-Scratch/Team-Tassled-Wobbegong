const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: {type: String, required: true},
  lastFed: {type: Date, default: Date.now()},
  feedingLog: {type: Array, default: []},
  hungry: {type: Boolean, default: true},
  healthy: {type: Boolean, default: true},
  clean: {type: Boolean, default: true},
  groomed: {type: Boolean, default: true},
})

module.exports = mongoose.model('Cat', catSchema);
//module.exports = db;