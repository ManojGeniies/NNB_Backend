const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Schema = new mongoose.Schema({
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: "userDetails" },
    pickUpLocation: String,
    dropLocation: String,
    firstMile: String,
    lastMile: String,
    paymentMethod: String,
    bookingPrice: String,
    bookingOTP: String
});

//Export the model
module.exports = mongoose.model('userBookings', Schema);