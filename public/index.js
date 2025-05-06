const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer(function(req, res) {

    console.log(req.url)
    //res.write("hello from server");
    //res.end();
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
