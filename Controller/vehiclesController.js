const vehicleInfoModel = require("../Model/vehicleInfoModel");

const controller = {
    async insertVechileinfo(req, res) {
        try {
            const {
                v_type,
                v_name,
                v_ownername,
                v_owner_mobile,
                v_reg_number,
                v_tax_upto,
                v_color,
                v_reg_date,
                v_seat_capacity,
                v_model_year,
                v_insurance_type,
                v_insurance_upto,
                v_polution_upto,
                v_fitness_upto,
                v_fuel_type,
                v_attach_date,
                v_active_status,
                created_date
            } = req.body
            const findMobilenum = await vehicleInfoModel.findOne({ v_owner_mobile })
            const findRegnum = await vehicleInfoModel.findOne({ v_reg_number })
            const insertInfo = async () => {
                const registerVechile = await vehicleInfoModel.create({
                    v_type,
                    v_name,
                    v_ownername,
                    v_owner_mobile,
                    v_reg_number,
                    v_tax_upto,
                    v_color,
                    v_reg_date,
                    v_seat_capacity,
                    v_model_year,
                    v_insurance_type,
                    v_insurance_upto,
                    v_polution_upto,
                    v_fitness_upto,
                    v_fuel_type,
                    v_attach_date,
                    v_active_status,
                    created_date
                });
                res.status(200).json({ status: true, message: 'New vechile info register success', registerVechile });
            }
            if (!findRegnum) {
                if (!findMobilenum) {
                    insertInfo()
                } else {
                    res.status(403).json({ status: false, message: 'Mobile number already exist' });
                }
            } else {
                res.status(403).json({ status: false, message: 'Vechile already registerd' });
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error });
        }
    }
}

module.exports = controller