const router = require("express").Router()
const userBooking = require("../../../Controller/user/booking/userBookingController");

router.post("/newUserBooking", userBooking.newBooking)

module.exports = router;