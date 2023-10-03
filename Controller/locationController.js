const locationModel = require("../Model/locationModels")

const controller = {
    async insertLocation(req, res) {
        const { location_name, latitude, longitude, created_date } = req.body
        const locationInsert = await locationModel.create({
            location_name,
            latitude,
            longitude,
            created_date
        });
        res.status(201).json({ status: true, message: "Location Insert Success", locationInsert })
    }
}

module.exports = controller;