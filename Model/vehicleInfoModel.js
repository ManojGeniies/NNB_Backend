const mongoose = require("mongoose");

const schema = mongoose.Schema({
    vehicleType: String,
    vehicleName: String,
    ownerName: String,
    ownerMobile: String,
    vehicleRegistrationNum: String,
    vehicleRegistrationAt: {
        type: Date,
        default: () => Date.now()
    },
    taxUpto: String,
    color: String,
    seatCapacity: String,
    insurenceType: String,
    insurenceUpto: {
        type: Date,
        default: () => Date.now()
    },
    polutionUpto: {
        type: Date,
        default: () => Date.now()
    },
    fitnessUpto: {
        type: Date,
        default: () => Date.now()
    },
    fuelType: String,
    attachedAt: {
        type: Date,
        default: () => Date.now()
    },
    activeStatus: String,
    documentationAt: {
        type: Date,
        default: () => Date.now()
    },
});

module.exports = mongoose.model("vehicle_info", schema)