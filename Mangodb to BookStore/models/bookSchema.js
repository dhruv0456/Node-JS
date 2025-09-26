const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    "title": {
        type: String,
        require: true
    },
    "author": {
        type: String,
        require: true
    },
     "genre" : {
        type : String,
        require : true
    },
    "price" : {
        type : Number,
        require : true
    },
     "description" : {
        type : String,
        require : true
    }
})

const bookSchema = mongoose.model("Book-Store", Schema);

module.exports = bookSchema;