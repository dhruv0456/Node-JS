const http = require('http');
const fs = require('fs');
const port = 1009;

const handleRequest = (req, res) => {
    let filename = '';
    switch (req.url) {
        case '/':
            filename = './index.html';
            break;
        default:
            filename = './error.html';
            break;
    }
    fs.readFile(filename, (err, result) => {
        if (!err) {
            res.end(result);
        }
    });
};

const server = http.createServer(handleRequest);

server.listen(port, (err) => {
    if (err) {
        console.log("Server not Found");
    }else{
        console.log("Server Started On Port => " + port);
        
    }
})