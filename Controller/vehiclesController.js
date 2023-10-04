const vehicleInfoModel = require("../Model/vehicleInfoModel");

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
                documentationAt
            } = req.body
            const findMobilenum = await vehicleInfoModel.findOne({ ownerMobile })
            const findRegnum = await vehicleInfoModel.findOne({ vehicleRegistrationNum })
            const insertInfo = async () => {
                const registerVechile = await vehicleInfoModel.create({
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
                    documentationAt
                });
                res.status(200).json({ status: true, message: 'New vehicle info register success', registerVechile });
            }
            if (!findRegnum) {
                if (!findMobilenum) {
                    insertInfo()
                } else {
                    res.status(403).json({ status: false, message: 'Mobile number already exist' });
                }
            } else {
                res.status(403).json({ status: false, message: 'Vehicle already registerd' });
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error });
        }
    }
}

module.exports = controller