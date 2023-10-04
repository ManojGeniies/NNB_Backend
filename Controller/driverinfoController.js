const driverInfo = require("../Model/driverInfoModel")
// const bookidgen = require("bookidgen");


const controller = {
    async insertDriverInfo(req, res) {
        try {
            const {
                vehicle_id,
                location_id,
                d_name,
                d_licenseno,
                mobile_no,
                aadhar_card,
                pan_card,
                license_type,
                blood_group,
                d_experience,
                d_address1,
                d_address2,
                d_city,
                d_pincode,
                emg_contact,
                joining_date,
                active_status,
                payment_status
            } = req.body
            const findDriverLicense = await driverInfo.findOne({ d_licenseno })
            const findDriverAadhar = await driverInfo.findOne({ aadhar_card })
            const insertInfo = async () => {
                // this.driver_id = await bookidgen("DRIVER", 1, 1000)
                const registerDriver = await driverInfo.create({
                    vehicle_id,
                    location_id,
                    d_name,
                    d_licenseno,
                    mobile_no,
                    aadhar_card,
                    pan_card,
                    license_type,
                    blood_group,
                    d_experience,
                    d_address1,
                    d_address2,
                    d_city,
                    d_pincode,
                    emg_contact,
                    joining_date,
                    active_status,
                    payment_status
                });
                res.status(200).json({ status: true, message: "Driver Info created success...!", registerDriver })
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