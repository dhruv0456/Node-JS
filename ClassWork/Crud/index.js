const { render } = require("ejs")
const express = require("express")
const port = 1008
const path = require("path")
const fs = require("fs")

const app = express()
const db = require("./config/db")
const Schema = require("./models/firstSchema")
const multer = require("./middlewares/multer")

// let students = [
//     {"id" : 1,"name" : "sumit","age":23},
//     {"id" : 2,"name" : "rahul","age":21},
//     {"id" : 3,"name" : "meet","age":20},
//     {"id" : 4,"name" : "heet","age":24},
// ]

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.get("/", async (req, res) => {
    await Schema.find().then((data) => {
        res.render("index", { data })
    })

})

app.post("/addData", multer, async (req, res) => {
    req.body.image = req.file.path
    await Schema.create(req.body).then(() => {
        res.redirect("/")
    })
})

app.get("/deletedata", async (req, res) => {
    let singleData = await Schema.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    await Schema.findByIdAndDelete(req.query.id).then(() => {
        res.redirect("/")
    })
})

app.get("/editData", async (req, res) => {
    let singleData = await Schema.findById(req.query.id)
    res.render("edit", { singleData })
})

app.post('/updateData', multer, async (req, res) => {
    let singleData = await Schema.findById(req.body.id)
    let img = "";

    req.file ? img = req.file.path : img = singleData.image

    req.file && fs.unlinkSync(singleData.image)

    req.body.image = img

    await Schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.redirect("/")
    })
})

// const middleware = (req,res, next)=> {
//     if (Number(req.body.age) >=18) {
//         next ();
//     } else {
//         res.redirect("/");
//     }
// }


// app.get("/",(req,res)=>{
//     res.render("index",{students})
// })

// app.post("/addData",(req,res)=>{
//     req.body.id = students.length+1
//     students.push(req.body)
//     res.redirect("/")
// })

// app.get("/deleteData/:id",(req,res)=>{
//     // console.log(req.params.id);
//     let newData = students.filter((item)=>item.id!=req.params.id)
//     students = newData
//     res.redirect("/")

// })

// app.get("/editData",(req,res)=>{
//     let singleData = students.find((item)=>item.id ==req.query.id)
//     res.render("edit",{singleData})
// })

// app.post("/updateData",(req,res)=>{
//     let singleData = students.find((item)=>item.id ==req.body.id)
//     singleData.name = req.body.name
//     singleData.age = req.body.age
//     res.redirect("/")
// })



app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on port : ", port);
})