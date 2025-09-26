// const http = require("http")
// const port = 1008

// const porthandler = (req,res)=>{
//     res.write("<h1>Server Started</h1>");
//     res.end()
// }

// const server = http.createServer(porthandler)

// server.listen(port,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Server Started On Port " + port);

//     }
// })


const express = require("express")
const port = 1008

const app = express()

app.set("view engine","ejs")

app.get("/", (req, res) => {
    // res.write("<h1>Hello Node</h1>")
    // res.end()
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server Started on port ${port}`);
    
    
})