const locationController = require("../Controller/locationController");
const router = require("express").Router();

router.post("/location", locationController.insertLocation);

module.exports = router;