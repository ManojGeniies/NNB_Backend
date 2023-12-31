const activeVehiclesModel = require("../Model/activeVehiclesModel");
const locationModel = require("../Model/locationModels");
const driverInfoModel = require("../Model/driverInfoModel");
const locationModels = require("../Model/locationModels");
const vehicleInfoModel = require("../Model/vehicleInfoModel");

const controller = {
  async findActivevehicles(req, res) {
    try {
      const { from } = req.query;

      const fromLocationId = await locationModel
        .findOne({ locationName: from })
        .select("_id");

      const [vehiclesData] = await activeVehiclesModel
        .find({ locationId: fromLocationId._id })
        .populate({
          path: "locationId vehicleId",
          select: "locationName ownerName activeStatus",
        });
      if (vehiclesData) {
        return res.status(200).json({ status: true, data: vehiclesData });
      } else {
        return res
          .status(404)
          .json({ status: true, message: "Vehicles not available...!" });
      }
    } catch (error) {
      return res.status(500).json({ status: false, error: error });
    }
  },

  async createActiveVehicles(req, res, value) {
    try {
      const DriverDetails = await driverInfoModel.findOne({
        mobileNumber: value.mobileNumber,
      });
      const locationDetails = await locationModels.findOne({
        locationName: value.location,
      });
      const vehicleDetails = await vehicleInfoModel.findOne({
        _id: DriverDetails.vehicleId,
      });

      const activeVehicles = await activeVehiclesModel.create({
        locationId: locationDetails._id,
        driverId: DriverDetails._id,
        vehicleId: vehicleDetails._id,
        vehicleType: vehicleDetails.vehicleType,
        activeStatus: vehicleDetails.activeStatus,
        updatedAt: Date.now(),
      });
      // return res.status(200).json({ status: true, message: 'Active vehicles successfully generated....!', activeVehicles });
    } catch (error) {
      return res.status(500).json({ status: false, message: error });
    }
  },

  async allActiveVehicles(req, res) {
    try {
      const AllActiveVehicles = await activeVehiclesModel.find().populate({
        path: "locationId vehicleId driverId",
        select:
          "locationName vehicleType vehicleName vehicleRegistrationNum seatCapacity activeStatus driverName mobileNumber",
      });
      res.status(200).json({ status: true, message: AllActiveVehicles });
    } catch (error) {
      return res.status(500).json({ status: false, message: error });
    }
  },
};

module.exports = controller;
