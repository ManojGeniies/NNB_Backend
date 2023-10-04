const mongoose = require("mongoose");

const schema = mongoose.Schema({
    vehicleType: String,
    vehicleName: String,
    ownerName: String,
    ownerMobile: String,
    vehicleRegistrationNum: String,
    vehicleRegistrationAt: {
        type: Date,
        default: () => Date
    },
    taxUpto: String,
    color: String,
    seatCapacity: String,
    insurenceType: String,
    insurenceUpto: {
        type: Date,
        default: () => Date
    },
    polutionUpto: {
        type: Date,
        default: () => Date
    },
    fitnessUpto: {
        type: Date,
        default: () => Date
    },
    fuelType: String,
    attachedAt: {
        type: Date,
        default: () => Date
    },
    activeStatus: String,
    documentationAt: {
        type: Date,
        default: () => Date
    },
});

module.exports = mongoose.model("vehicle_info", schema)