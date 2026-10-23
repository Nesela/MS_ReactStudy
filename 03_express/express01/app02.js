// 1. 호출
const express = require("express");

// 2. 생성
const app = express();

// 3. 미들 웨어

// 4. 라우팅
app.get("/api/html", (req, resp)=> {
    resp.send("<h1>hello</h1>");
});

app.get("/api/json", (req, resp)=>{
    resp.json({success: true, message: "hello"});
});

app.get("/err/string", (req, resp)=>{
    resp.status(404).send("Not Found");
})

app.get("/err/json", (req, resp)=>{
    resp.status(404).json("Not Found");
})

// 5. 서버실행
app.listen(3000, ()=> {
    console.log("https://localhost:3000");
})