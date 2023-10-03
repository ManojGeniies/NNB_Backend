const locationModel = require("../Model/locationModels");

const controller = {
  async search(req, res) {
    try {
      const { location_name } = req.query;
      const findLocation = await locationModel.find({
        $or: [{ location_name: { $regex: location_name } }],
      });

      return res.status(200).json({ status: true, message: findLocation });
    } catch (error) {}
  },
};

module.exports = controller;
