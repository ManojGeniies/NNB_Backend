const mongoose = require("mongoose");

const schema = mongoose.Schema({
    v_type: String,
    v_name: String,
    v_ownername: String,
    v_owner_mobile: String,
    v_reg_number: String,
    v_tax_upto: String,
    v_color: String,
    v_reg_date: String,
    v_seat_capacity: String,
    v_model_year: String,
    v_insurance_type: String,
    v_insurance_upto: String,
    v_polution_upto: String,
    v_fitness_upto: String,
    v_fuel_type: String,
    v_attach_date: String,
    v_active_status: String,
    created_date: String,
});

module.exports = mongoose.model("vehicle_info", schema)