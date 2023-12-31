const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const dbConnect = require("./Connection/db");
require("dotenv").config();

// Router
const filterRoute = require("./Router/filterRouter");
const vehicleinforoute = require("./Router/vehicleRouter");
const locationRoute = require("./Router/locationRouter");
const searchRouter = require("./Router/searchfilterRouter");
const activeVehicleRoute = require("./Router/activeVehicleRouter");
const driverInfoRoute = require("./Router/driverInfoRouter");
const userRoute = require("./Router/userRouter");
const endUserRoute = require("./Router/user/auth/endUserRouter");
const userBookingRoute = require("./Router/user/booking/userBookingRouter")

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// DB Connection
dbConnect(process.env.Mongo_URL);

// API Routing
app.use("/", filterRoute);
app.use("/", vehicleinforoute);
app.use("/", locationRoute);
app.use("/", searchRouter);
app.use("/", activeVehicleRoute);
app.use("/", driverInfoRoute);
app.use("/", userRoute)
app.use("/", endUserRoute);
app.use("/", userBookingRoute);

// Server listening PORT
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running in ${process.env.PORT || 3001}`);
});
