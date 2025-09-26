const express = require("express");
const port = 1005;
const path = require("path");



const app = express();
const db = require("./config/db");
const Schema = require("./models/firstSchema.js");

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, 'public')));



// ✅ Home page -> sari books dikhana
app.get("/", async (req, res) => {
  await Schema.find().then((books) => {
    res.render("home", { books });
  });
});

// ✅ Add page -> form dikhana
app.get("/add", (req, res) => {
  res.render("add");
});

// ✅ Add book (form POST)
app.post("/addBook", async (req, res) => {
  await Schema.create(req.body).then(() => {
    res.redirect("/");
  });
});

app.get("/deleteData", async (req, res) => {
  await Schema.findByIdAndDelete(req.query.id).then(() => {
    res.redirect("/");
  });
});


// Edit page
app.get("/editData", async (req, res) => {
  let singleData = await Schema.findById(req.query.id);
  res.render("edit", { singleData });
});


app.post("/updateData", async (req, res) => {
  await Schema.findByIdAndUpdate(req.body.id, req.body).then(() => {
    res.redirect("/");
  });
});


app.listen(port, (err) => {
  err ? console.log(err) : console.log("Server is Started :-" + port);
})