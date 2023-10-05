const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    driverId: { type: mongoose.SchemaTypes.ObjectId, ref: "driver_info" },
    mobileNumber: Number,
    password: String
});

//Export the model
module.exports = mongoose.model('User', userSchema);