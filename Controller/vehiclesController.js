const vehicleInfoModel = require("../Model/vehicleInfoModel");
const driverInfoModel = require("../Model/driverInfoModel");
const { find } = require("../Model/userModel");

const controller = {
    async insertVechileinfo(req, res) {
        try {
            const {
                vehicleType,
                vehicleName,
                ownerName,
                ownerMobile,
                vehicleRegistrationNum,
                vehicleRegistrationAt,
                taxUpto,
                color,
                seatCapacity,
                insurenceType,
                insurenceUpto,
                polutionUpto,
                fitnessUpto,
                fuelType,
                attachedAt,
                activeStatus,
            } = req.body
            // const findMobilenum = await vehicleInfoModel.findOne({ ownerMobile })
            const findRegnum = await vehicleInfoModel.findOne({ vehicleRegistrationNum })
            const insertInfo = async () => {
                const registerVehicle = await vehicleInfoModel.create({
                    vehicleType,
                    vehicleName,
                    ownerName,
                    ownerMobile,
                    vehicleRegistrationNum,
                    vehicleRegistrationAt,
                    taxUpto,
                    color,
                    seatCapacity,
                    insurenceType,
                    insurenceUpto,
                    polutionUpto,
                    fitnessUpto,
                    fuelType,
                    attachedAt,
                    activeStatus,
                    documentationAt: Date.now()
                });
                const createDriver = await driverInfoModel.create({
                    vehicleId: registerVehicle._id,
                    joiningDate: Date.now(),
                    paymentStatus:"Yes"
                });
                res.status(200).json({ status: true, message: 'New vehicle info register success', registerVehicle, createDriver });
            }

            if (!findRegnum) {
                // if (!findMobilenum) {
                    insertInfo()
                // } else {
                //     res.status(403).json({ status: false, message: 'Mobile number already exist' });
                // }
            } else {
                res.status(403).json({ status: false, message: 'Vehicle already registered' });
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error });
        }
    },

    async allVehicles(req, res) {
        try {
            const vehicleDetails = await vehicleInfoModel.find();

            res.status(200).json({status: true, message: vehicleDetails})
        } catch (error) {
            res.status(500).json({ status: false, message: error });
        }
    }
}

module.exports = controller