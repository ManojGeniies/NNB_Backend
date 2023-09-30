const mongoose = require("mongoose");

const schema = mongoose.Schema({
  location_name: String,
  latitude: String,
  longitude: String,
  created_date: String,
});

module.exports = mongoose.model("location", schema);
