const mongoose = require("mongoose");

const schema = mongoose.Schema({
    vehicleId: String,
    locationId: String,
    driverName: String,
    licenseNumber: String,
    mobileNumber: Number,
    aadharNumber: Number,
    panCard: String,
    licenseType: String,
    bloodGroup: String,
    drivingExperience: String,
    address1: String,
    address2: String,
    city: String,
    pincode: Number,
    emergencyContactNum: String,
    joiningDate: {
        type: Date,
        default: () => Date.now()
    },
    activeStatus: {
        type: Boolean,
        default: false
    },
    paymentStatus: String
});

module.exports = mongoose.model("driver_info", schema)

