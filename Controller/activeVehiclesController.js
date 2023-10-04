const activeVehiclesModel = require("../Model/activeVehiclesModel");
const locationModel = require("../Model/locationModels");

const controller = {
  async findActivevehicles(req, res) {
    try {
      const { from } = req.query;

      const fromLocationId = await locationModel
        .findOne({ locationName: from })
        .select("_id");

      const [vehiclesData] = await activeVehiclesModel
        .find({ location_id: fromLocationId._id })
        .populate({
          path: "location_id vehicle_id",
          select: "location_name v_ownername"
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
};

module.exports = controller;
