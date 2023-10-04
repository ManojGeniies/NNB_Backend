const locationModel = require("../Model/locationModels");

const controller = {
  async search(req, res) {
    try {
      const { locationName } = req.query;
      const findLocation = await locationModel.find({
        $or: [{ locationName: { $regex: locationName } }],
      });

      return res.status(200).json({ status: true, message: findLocation });
    } catch (error) {}
  },
};

module.exports = controller;
