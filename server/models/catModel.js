const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: {type: String, required: true},
  lastFed: {type: Date, default: Date.now()},
  feedingLog: {type: Array, default: []},
})

module.exports = mongoose.model('Cat', catSchema);
//module.exports = db;