const {createServer} = require("node:http");

const server = createServer((req, resp)=> {
    if (req.url === "/api/data" && req.method === "GET") {
        const data = {
            success: true,
            message: "json test",
            nums: [1, 2, 3],
            user: {
                id: 1,
                name: "hong-gd"
            }
        };

        resp.statusCode = 200;
        resp.setHeader("Content-Type", "application/json; charset=utf-8");
        resp.end(JSON.stringify(data));
    } else {
        resp.statusCode = 404;
        resp.setHeader("Content-Type", "application/json; charset=utf-8");
        resp.end(JSON.stringify({message: "not found"}));
    }
});

server.listen(3000, ()=> {
    console.log("http://localhost:3000");
})