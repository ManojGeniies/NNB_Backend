const mongoose = require("mongoose");

const schema = mongoose.Schema({
  locationId: { type: mongoose.SchemaTypes.ObjectId, ref: "location" },
  driverId: { type: mongoose.SchemaTypes.ObjectId, ref: "driver_info" },
  vehicleId: { type: mongoose.SchemaTypes.ObjectId, ref: "vehicle_info" },
  vehicleType: String,
  // activeStatus: { type: mongoose.SchemaTypes.ObjectId, ref: "vehicle_info" },
  activeStatus: Boolean,
  updatedAt: {
    type: Date,
    default: () => Date.now()
  }
});

module.exports = mongoose.model("active_vehicle", schema);
