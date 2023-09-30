const mongoose = require("mongoose");

const schema = mongoose.Schema({
  _id: String,
  id: String,
  location_id: String,
  vehicle_type: String,
  driver_id: String,
  a_status: String,
  updated_date: String,
});

module.exports = mongoose.model("active_vehicle", schema)