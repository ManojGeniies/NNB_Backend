const mongoose = require("mongoose");

const schema = mongoose.Schema({
  location_name: String,
  latitude: {
    type: String,
    default: 'Point',
  },
  longitude: {
    type: String,
    default: 'Point',
  },
  created_date: Date
});

module.exports = mongoose.model("location", schema);
