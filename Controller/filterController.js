const filterModel = require("../Model/filterModel");
const activeVehiclesModel = require("../Model/activeVehiclesModel")

const controller = {
  async filterVehicles(req, res) {
    try {
      const [locationData] = await filterModel
        .find({
          location_name: req.query.location_name,
        })
        .select(["l_id"]);

       const activeVehicles = await activeVehiclesModel.find({location_id: locationData.l_id})

       console.log(activeVehicles);

      res.status(200).json({ status: true, data: activeVehicles });
    } catch (error) {
      res.status(500).json({ status: false, message: error });
    }
  },
};

module.exports = controller;
