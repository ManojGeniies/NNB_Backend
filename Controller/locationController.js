const locationModel = require("../Model/locationModels");

const controller = {
  async insertLocation(req, res) {
    try {
      const { locationName, latitude, longitude, createdAt } = req.body;
      const locationInsert = await locationModel.create({
        locationName: locationName.toLowerCase(),
        latitude,
        longitude,
        createdAt,
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
