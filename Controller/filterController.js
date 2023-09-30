const LocationModel = require("../Model/locationModel");
const activeVehiclesModel = require("../Model/activeVehiclesModel")

const controller = {
  async filterVehicles(req, res) {
    try {
      const [locationData] = await LocationModel.find({location_name: req.query.location_name,}).select(["l_id"]);

      if (locationData) {
        const activeVehicles = await activeVehiclesModel.find({ location_id: locationData.l_id })

        return res.status(200).json({ status: true, data: activeVehicles });
      } else {
        return res.status(404).json({ status: false, message: "Services not providing for this location!" });
      }

    } catch (error) {
      return res.status(500).json({ status: false, message: error });
    }
  },
};

module.exports = controller;
