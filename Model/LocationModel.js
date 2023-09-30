const mongoose = require("mongoose");

const schema = mongoose.Schema({
  l_id: String,
  location_name: String,
  latitude: String,
  longitude: String,
  created_date: String,
});

module.exports = mongoose.model("location", schema);
