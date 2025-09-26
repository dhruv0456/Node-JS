const express = require("express")
const route = express.Router()
const MovieColtrol = require("../controller/ctl")
const multer = require("../middelwares/multer")

route.get("/", MovieColtrol.Firstpagesh)

route.get("/add-movie" , MovieColtrol.addButoon)

route.get("/add-movie-data", multer,MovieColtrol.addFuncation)

route.get("/deleteData", MovieColtrol.deleteFuncation)

route.get("/editData", MovieColtrol.editFuncation)

route.post("/moviesupdate", multer,MovieColtrol.updateFuncation)

module.exports = route