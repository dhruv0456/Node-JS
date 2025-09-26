const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Movie-Store");

const db = mongoose.connection;

db.once("open", (err) => {
    err ? console.log(err) : console.log("Database is Connected");
})

module.exports = db