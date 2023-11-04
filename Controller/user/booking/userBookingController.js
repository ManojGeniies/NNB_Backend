const userBooking = require("../../../Model/user/booking/userBooking");

const controller = {
    async newBooking(req, res) {
        try {
            const {
                userId,
                pickUpLocation,
                dropLocation,
                firstMile,
                lastMile,
                paymentMethod,
                bookingPrice,
            } = req.body

            // Generate OTP
            const Max = 9999
            const TempOTP = Math.floor(Math.random() * Max)
            let otpLength = TempOTP.toString().length
            if (otpLength !== 4) {
                TempOTP = String(TempOTP).padStart(4, '0');
            }
            const bookingDetails = await userBooking.create({
                userId,
                pickUpLocation,
                dropLocation,
                firstMile,
                lastMile,
                paymentMethod,
                bookingPrice,
                bookingOTP: TempOTP
            })
            res.status(200).json({ status: true, message: bookingDetails })
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: error })
        }
    }
}

module.exports = controller