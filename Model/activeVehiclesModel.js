const mongoose = require("mongoose");

const schema = mongoose.Schema({
  location_id: { type: mongoose.SchemaTypes.ObjectId, ref: "location" },
  driver_id: { type: mongoose.SchemaTypes.ObjectId, ref: "driver_info" },
  active_status: String,
  updatedAt: {
    type: Date,
    default: () => Date.now()
  },
  vehicle_type: String,
  vehicle_id: { type: mongoose.SchemaTypes.ObjectId, ref: "vehicle_info" },
});

module.exports = mongoose.model("active_vehicle", schema);
