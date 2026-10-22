const {createServer} = require("node:http");

const server = createServer((req, resp)=> {

    if (req.url === "/" && req.method === "GET") {
        resp.statusCode = 200;
        resp.setHeader("Content-Type", "text/html; charset=utf-8");
        resp.end("<h1>Main Page</h1>");

    } else if (req.url === "/else" && req.method === "GET") {
        resp.statusCode = 200;
        resp.setHeader("Content-Type", "text/html; charset=utf-8");
        resp.end("<h1>Else Page</h1>");
    } else {
        resp.statusCode = 404;
        resp.setHeader("Content-Type", "text/plain");
        resp.end("404 not found");
    }
})

server.listen(3000, ()=> {
    console.log("http://localhost:3000");
});

/*
2xx : 성공
200 OK : 정상적인 요청
201 Created : 새로운 데이터 생성 성공
204 No Content : 성공했지만 응답 데이터 없음

4xx : 클라이언트 요청 오류
400 Bad Request : 잘못된 요청
401 Unauthorized : 인증 필요
403 Forbidden : 권한 없음
404 Not Found : 리소스 없음

5xx : 서버 오류
500 Internal Server Error : 서버 내부 오류
502 Bad Gateway : Gateway 오류
503 Service Unavailable : 서비스 이용 불가
*/
