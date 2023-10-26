const userModel = require("../Model/userModel");
const driverInfo = require("../Model/driverInfoModel");
const vehicleInfo = require("../Model/vehicleInfoModel");
const activeVehicleController = require("../Controller/activeVehiclesController");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const activeVehiclesModel = require("../Model/activeVehiclesModel");

const controller = {
  async createUserPassword(req, res) {
    try {
      const { mobileNumber, password, confirmPassword } = req.body;
      if (password && confirmPassword) {
        const findMobile = await userModel.findOne({ mobileNumber });

        const findDriver = await driverInfo
          .findOne({ mobileNumber })
          .select("_id");

        const findDriverId = findDriver._id;

        const passwordCreate = async () => {
          if (password == confirmPassword) {
            const salt = await bcryptjs.genSalt(10);
            const passwordEncrypt = await bcryptjs.hash(password, salt);

            const userPassword = await userModel.create({
              driverId: findDriverId,
              mobileNumber,
              password: passwordEncrypt,
            });

            return res.status(200).json({
              status: true,
              message: "Password Updated...!",
              userPassword,
            });
          } else {
            return res.status(401).json({
              status: false,
              message: "Password and confirm-password Does't matched",
            });
          }
        };
        if (!findMobile) {
          passwordCreate();
        } else {
          return res.status(403).json({
            status: false,
            message: "Mobile number already exist...!",
          });
        }
      } else {
        return res
          .status(403)
          .json({ status: false, message: "Please Fill all the inputs" });
      }
    } catch (error) {
      return res.status(500).json({ status: false, message: error });
    }
  },

  async UserLogin(req, res) {
    try {
      const { mobileNumber, password } = req.body;

      const existUserMobile = await userModel.findOne({ mobileNumber });
      const existDriverDetails = await driverInfo.findOne({
        _id: existUserMobile.driverId,
      });
      const activeVhicleDetails = await activeVehiclesModel.findOne({
        driverId: existUserMobile.driverId,
      });

      const existDriverMobileNumber = existDriverDetails.mobileNumber;

      if (mobileNumber && password) {
        const passwordChecking = async (userExist) => {
          const compare = await bcryptjs.compare(password, userExist.password);
          if (compare) {
            const token = jwt.sign(
              { id: userExist._id, mobileNumber },
              "abcd",
              {
                expiresIn: "1hr",
              }
            );

            // Change driverinfo active status
            if (token) {
              // already login or not
              if (!activeVhicleDetails) {
                const driverDetails = await driverInfo.findOneAndUpdate(
                  { mobileNumber },
                  { $set: { activeStatus: true } }
                );

                // Change vehicleInfo active status
                await vehicleInfo.findOneAndUpdate(
                  { _id: driverDetails.vehicleId },
                  { $set: { activeStatus: true } }
                );

                // Call the active vahicles controller and create the active vehicles
                await activeVehicleController.createActiveVehicles(req, res, {
                  mobileNumber,
                  location: req.body.location,
                });
              } else {
                return res
                  .status(403)
                  .json({ status: false, message: "Something went wrong" });
              }
            } else {
              return res
                .status(401)
                .json({ status: false, message: "Invalid Token" });
            }
            return res.status(201).json({
              status: true,
              message: "Login successfully",
              token: token,
            });
          } else {
            return res
              .status(401)
              .json({ status: false, message: "Invalid password" });
          }
        };

        if (existDriverMobileNumber == mobileNumber) {
          passwordChecking(existUserMobile);
        } else {
          return res.status(403).json({
            status: false,
            message: "Mobile number doesn't exist",
          });
        }
      } else {
        return res
          .status(403)
          .json({ status: false, message: "Please fill all the inputs" });
      }
    } catch (error) {
      return res.status(500).json({ status: false, message: error });
    }
  },

  async userLogout(req, res) {
    try {
      const removeActiveVehicles = await activeVehiclesModel.findOne({
        driverId: req.params.id,
      });
      if (removeActiveVehicles) {
        await activeVehiclesModel.deleteOne({
          driverId: removeActiveVehicles.driverId,
        });

        // Change driverinfo active status
        const driverDetails = await driverInfo.findOneAndUpdate(
          { _id: req.params.id },
          { $set: { activeStatus: false } }
        );

        // // Change vehicleInfo active status
        await vehicleInfo.findOneAndUpdate(
          { _id: driverDetails.vehicleId },
          { $set: { activeStatus: false } }
        );
        return res
          .status(200)
          .json({ status: true, message: "You have been logout" });
      } else {
        return res
          .status(401)
          .json({ status: false, message: "Something went wrong" });
      }
    } catch (error) {
      return res.status(500).json({ status: false, message: error });
    }
  },
};

module.exports = controller;
