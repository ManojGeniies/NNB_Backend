const mongoose = require("mongoose");

const schema = mongoose.Schema({
    v_type: String,
    v_name: String,
    v_ownername: String,
    v_owner_mobile: Number,
    v_reg_number: String,
    v_tax_upto: String,
    v_color: String,
    v_reg_date: Date,
    v_seat_capacity: String,
    v_model_year: Date,
    v_insurance_type: String,
    v_insurance_upto: Date,
    v_polution_upto: Date,
    v_fitness_upto: Date,
    v_fuel_type: String,
    v_attach_date: Date,
    v_active_status: String,
    created_date: Date,
});

module.exports = mongoose.model("vehicle_info", schema)