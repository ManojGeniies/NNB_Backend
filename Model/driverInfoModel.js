const mongoose = require("mongoose");

const schema = mongoose.Schema({
    vehicleId: String,
    locationId: String,
    driverName: String,
    licenseNumber: String,
    mobileNumber: String,
    aadharNumber: String,
    panCard: String,
    licenseType: String,
    bloodGroup: String,
    driverExperience: String,
    address1: String,
    address2: String,
    city: String,
    pincode: String,
    emergencyContactNum: String,
    joiningDate: {
        type: Date,
        default: () => Date.now()
    },
    activeStatus: String,
    paymentStatus: {
        type: String,
        default: "Yes"
    }
});

module.exports = mongoose.model("driver_info", schema)

