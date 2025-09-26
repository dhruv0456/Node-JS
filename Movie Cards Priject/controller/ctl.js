const Schema = require("../models/movieSchema")
const fs = require("fs")

module.exports.Firstpagesh = async (req, res) => {
    await Schema.find().then((movies) => {
        res.render("home", { movies })
    })
}

module.exports.addButoon = (req, res) => {
    res.render("/add-movie")
}

module.exports.addFuncation = async (req, res) => {
    req.body.image = req.file.path
    await Schema.create().then(() => {
        res.redirect("/")
    })
}

module.exports.deleteFuncation = async (req, res) => {
    let singledata = await Schema.findById(req.query.id)
    fs.unlinkSync(singledata.image)
    await Schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/")
    })
}

module.exports.deleteFuncation = async (req, res) => {
    let singledata = await Schema.findById(req.query.id)
    fs.unlinkSync(singledata.image)
    await Schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/")
    })
}

module.exports.editFuncation = async (req, res) => {
    let movie = await Schema.findById(req.query.id)
    res.render("edit", { movie })
}


module.exports.updateFuncation = async (req, res) => {
    let movie = await Schema.findById(req.body.id)
    let img = "";

    req.file ? img = req.file.path : img = movie.image

    req.file && fs.unlinkSync(movie.image);

    req.body.image = img

    await Schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect("/")
    })
}