const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const dbConnect = require("./Connection/db");
require("dotenv").config();

// Router
const filterRoute = require("./Router/filterRouter");
const vehicleinforoute = require("./Router/vehicleRouter")
const locationRoute = require("./Router/locationRouter")
const searchRouter = require("./Router/searchfilterRouter")
const activeVehicleRoute = require("./Router/activeVehicleRouter")

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// DB Connection
dbConnect(process.env.MONGO_URL);

// API Routing
app.use("/", filterRoute);
app.use("/", vehicleinforoute);
app.use("/", locationRoute);
app.use("/", searchRouter)
app.use("/", activeVehicleRoute)

// Server listening PORT
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running in ${process.env.PORT || 3001}`);
});
