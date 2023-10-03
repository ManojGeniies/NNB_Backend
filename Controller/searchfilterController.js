const locationModel = require("../Model/locationModels")

const controller = {
    async search(req, res) {
        try {
            const { location_name } = req.query
            const findLocation = await locationModel.where({ location_name })
        } catch (error) {

        }
    }
}

module.exports = controller