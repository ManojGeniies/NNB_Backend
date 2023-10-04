const mongoose = require("mongoose");

const schema = mongoose.Schema({
  locationId: { type: mongoose.SchemaTypes.ObjectId, ref: "location" },
  driverId: { type: mongoose.SchemaTypes.ObjectId, ref: "driver_info" },
  activeStatus: String,
  updatedAt: {
    type: Date,
    default: () => Date.now()
  },
  vehicleType: String,
  vehicleId: { type: mongoose.SchemaTypes.ObjectId, ref: "vehicle_info" },
});

module.exports = mongoose.model("active_vehicle", schema);
