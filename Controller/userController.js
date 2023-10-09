const userModel = require("../Model/userModel");
const driverInfo = require("../Model/driverInfoModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
              message: "User credentials created success...!",
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
      if (mobileNumber && password) {
        const passwordChecking = async (userExist) => {
          const compare = await bcryptjs.compare(password, userExist.password);
          if (compare) {
            const token = jwt.sign(
              { id: userExist._id, mobileNumber }, "abcd",
              {
                expiresIn: "1hr",
              }
            );
            if (token) {
              await driverInfo.findOneAndUpdate({ mobileNumber }, {
                $set: {
                  activeStatus: true
                }
              })
            } else {
              return res
                .status(401)
                .json({ status: false, message: "Invalid Token" });
            }
            return res.status(201).json({
              status: true,
              message: "Login successfully",
              token: token
            });
          } else {
            return res
              .status(401)
              .json({ status: false, message: "Invalid password" });
          }
        };
        const existUserMobile = await userModel.findOne({ mobileNumber });
        const existDriverDetails = await driverInfo.findOne({
          _id: existUserMobile.driverId,
        });
        const existDriverMobileNumber = existDriverDetails.mobileNumber;
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
      // const token = jwt.verify(token, 'abcd')
      // if (!token) {
      //   return res.status(401).json({ status: false, message: "Logout falied" });
      // } else {
      //   jwt.destroy(token)
      // }
      const authHeader = req.headers["abcd"]
      jwt.sign(authHeader, "", { expiresIn: 1 }, (logout) => {
        if (logout) {
          return res.status(201).json({ status: true, message: "Logout success" })
        } else {
          return res.status(401).json({ status: false, message: "Failed" });
        }
      })
    } catch (error) {
      return res.status(500).json({ status: false, message: error });
    }
  }

};

module.exports = controller;
