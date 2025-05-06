const { log } = require("console");
const http = require("http");

const PORT = 3000;

const server = http.createServer(function (req, res) {
    console.log(req.url);
    res.write("<h1>Hello from server created using Node.js</h1>");
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
