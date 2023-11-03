const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    mobile: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
});

//Export the model
module.exports = mongoose.model('userDetails', userSchema);