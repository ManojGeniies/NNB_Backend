const mongoose = require("mongoose");

const schema = mongoose.Schema({
    vehicleType: String,
    vehicleName: String,
    ownerName: String,
    ownerMobile: String,
    vehicleRegistrationNum: String,
    vehicleRegistrationAt:Date,
    taxUpto: String,
    color: String,
    seatCapacity: String,
    insurenceType: String,
    insurenceUpto: Date,
    polutionUpto: Date,
    fitnessUpto: Date,
    fuelType: String,
    attachedAt: Date,
    activeStatus: String,
    documentationAt: Date,
});

module.exports = mongoose.model("vehicle_info", schema)