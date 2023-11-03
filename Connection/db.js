const mongoose = require("mongoose");

module.exports = function dbConnect(URL) {
    try {
        mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const db = mongoose.connection;

        db.once("open", () => {
            console.log(`DB Connected!`);
        })
    } catch (error) {
        console.log(`DB Connection fail!`, error);
    }
}
