const mongoose = require("mongoose");

const schema = mongoose.Schema({
    l_id: String,
  location_id: String,
  vehicle_type: String,
  driver_id: String,
  a_status: String,
  updated_date: String,
});

module.exports = mongoose.model("location", schema);
