const express = require("express");
const port = 1005;
const path = require("path");

const app = express();
const db = require("./config/db");


app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/", require("./routes/route"))


// ✅ Home page -> sari Movie dikhana
// app.get("/", async (req, res) => {
//   await movieSchema.find().then((movies) => {
//     res.render("home", { movies });
//   });
// });

// // ✅ Add page -> form dikhana
// app.get("/add-movie", (req, res) => {
//   res.render("add-movie");
// });

// // ✅ Add Movie (form POST)
// app.post("/add-movie", multer, async (req, res) => {
//   req.body.image = req.file.path
//   await movieSchema.create(req.body).then(() => {
//     res.redirect("/");
//   });
// });

// app.get("/deleteData", async (req, res) => {
//   let singleData = await movieSchema.findById(req.query.id)
//   fs.unlinkSync(singleData.image)
//   await movieSchema.findByIdAndDelete(req.query.id).then(() => {
//     res.redirect("/");
//   });
// });


// // Edit page
// app.get("/editData", async (req, res) => {
//   let movie = await movieSchema.findById(req.query.id)
//   res.render("edit", { movie });
// })


// app.post("/moviesupdate", multer,async (req, res) => {
 
// console.log(req.body);

//   let movie = await movieSchema.findById(req.body.id)
//   let img = "";

//   req.file ? img = req.file.path : img = movie.image

//   req.file && fs.unlinkSync(movie.image)

//   req.body.image = img
//   await movieSchema.findByIdAndUpdate(req.body.id, req.body).then(() => {
//     res.redirect("/");
//   });
// });


app.listen(port, (err) => {
  err ? console.log(err) : console.log("Server is Started :-" + port);
})