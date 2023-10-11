const mongoose = require("mongoose");

const schema = mongoose.Schema({
    vehicleType: String,
    vehicleName: String,
    ownerName: String,
    ownerMobile: Number,
    vehicleRegistrationNum: String,
    vehicleRegistrationAt: Date,
    taxUpto: String,
    color: String,
    seatCapacity: String,
    insurenceType: String,
    insurenceUpto: Date,
    polutionUpto: Date,
    fitnessUpto: Date,
    fuelType: String,
    attachedAt: Date,
    activeStatus: {
        type: Boolean,
        default: false
    },
    documentationAt: {
        type: Date,
        default: () => Date
    },
});

module.exports = mongoose.model("vehicle_info", schema)