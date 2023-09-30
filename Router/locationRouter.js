const locationController = require("../Controller/locationController");
const router = require("express").Router();

router.post("/location", locationController);

module.exports = router;