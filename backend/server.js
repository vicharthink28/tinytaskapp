const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    const tasks = fs.readFileSync("database/tasks.json", "utf8");

    res.end(tasks);
});

server.listen(3000, () => {
    console.log("Backend running on http://localhost:3000");
});
