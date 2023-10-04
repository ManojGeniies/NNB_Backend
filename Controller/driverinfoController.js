const driverInfo = require("../Model/driverInfoModel")

const controller = {
    async insertDriverInfo(req, res) {
        try {
            const {
                locationId,
                driverName,
                licenseNumber,
                mobileNumber,
                aadharNumber,
                panCard,
                licenseType,
                bloodGroup,
                driverExperience,
                address1,
                address2,
                city,
                pincode,
                emergencyContactNum,
                activeStatus,
            } = req.body
            const driverId = req.params.id
            const findDriverLicense = await driverInfo.findOne({ licenseNumber })
            const findDriverAadhar = await driverInfo.findOne({ aadharNumber })
            const insertInfo = async () => {
                const registerDriver = await driverInfo.findOneAndUpdate(
                    { _id: driverId },
                    {
                        $set: {
                            locationId,
                            driverName,
                            licenseNumber,
                            mobileNumber,
                            aadharNumber,
                            panCard,
                            licenseType,
                            bloodGroup,
                            driverExperience,
                            address1,
                            address2,
                            city,
                            pincode,
                            emergencyContactNum,
                            activeStatus,
                        }
                    });
                res.status(200).json({ status: true, message: "Driver details updated" })
            }
            if (!findDriverAadhar) {
                if (!findDriverLicense) {
                    insertInfo()
                } else {
                    res.status(403).json({ status: false, message: 'Driver license number already exist' });
                }
            } else {
                res.status(403).json({ status: false, message: 'Aadhar number already exist' });
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error });
        }
    }
}

module.exports = controller