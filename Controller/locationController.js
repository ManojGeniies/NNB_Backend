const locationModel = require("../Model/locationModels");

const controller = {
  async insertLocation(req, res) {
    try {
      const { location_name, latitude, longitude, created_date } = req.body;
      const locationInsert = await locationModel.create({
        location_name: location_name.toLowerCase(),
        latitude,
        longitude,
        created_date,
      });
      res.status(201).json({
        status: true,
        message: "Location Insert Success",
        locationInsert,
      });
    } catch (error) {
      res.status(500).json({ status: false, message: error });
    }
  },
};

module.exports = controller;
