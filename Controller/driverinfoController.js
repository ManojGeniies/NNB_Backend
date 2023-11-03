const driverInfo = require("../Model/driverInfoModel");
const userModel = require("../Model/userModel");

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
        drivingExperience,
        address1,
        address2,
        city,
        pincode,
        emergencyContactNum,
        activeStatus,
      } = req.body;

      const driverId = req.params.id;
      const findDriverLicense = await driverInfo.findOne({ licenseNumber });
      const findDriverAadhar = await driverInfo.findOne({ aadharNumber });
      const findMobileNumber = await driverInfo.findOne({ mobileNumber });

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
              drivingExperience,
              address1,
              address2,
              city,
              pincode,
              emergencyContactNum,
              activeStatus,
            },
          }
        );

        const findExistedDriverInfo = await driverInfo.findOne({
          _id: driverId,
        });

        res.status(200).json({
          status: true,
          message: "Driver details updated",
          registerDriver,
          findExistedDriverInfo,
        });
      };
      if (!findDriverAadhar) {
        if (!findDriverLicense) {
          if (!findMobileNumber) {
            insertInfo();
          } else {
            res.status(403).json({
              status: false,
              message: "Driver's Mobile number already exist",
            });
          }
        } else {
          res.status(403).json({
            status: false,
            message: "Driver license number already exist",
          });
        }
      } else {
        res
          .status(403)
          .json({ status: false, message: "Aadhaar number already exist" });
      }
    } catch (error) {
      res.status(500).json({ status: false, message: error });
    }
  },

  async allDrivers(req, res) {
    try {
      const driversDetails = await driverInfo.find()
      res.status(200).json({ status: true, message: driversDetails })
    } catch (error) {
      res.status(500).json({ status: false, message: error });
    }
  },
};

module.exports = controller;
