const mongoose = require("mongoose");

const schema = mongoose.Schema({
  locationName: String,
  latitude: {
    type: String,
    default: "Point",
  },
  longitude: {
    type: String,
    default: "Point",
  },
  createdAt: {
    type: Date,
    default: () => Date.now()
  },
});

module.exports = mongoose.model("location", schema);
