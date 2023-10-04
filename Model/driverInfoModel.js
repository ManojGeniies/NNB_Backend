const mongoose = require("mongoose");

const schema = mongoose.Schema({
    vehicle_id: String,
    location_id: String,
    d_name: String,
    d_licenseno: String,
    mobile_no: String,
    aadhar_card: String,
    pan_card: String,
    license_type: String,
    blood_group: String,
    d_experience: String,
    d_address1: String,
    d_address2: String,
    d_city: String,
    d_pincode: String,
    emg_contact: String,
    joining_date: Date,
    active_status: String,
    payment_status: String,
});

module.exports = mongoose.model("driver_info", schema)

