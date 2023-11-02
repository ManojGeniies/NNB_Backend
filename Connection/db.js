const mongoose = require("mongoose");

module.exports = function dbConnect(URL) {
    try {
        mongoose.connect(`mongodb+srv://admin:DevTeam123@cluster0.d42klce.mongodb.net/NNB`, {
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
