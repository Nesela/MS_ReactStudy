// 1. 호출
const express = require("express");
const path = require("path");
// 2. 생성
const app = express();
const HOST = "localhost";
const PORT = 3001;
// 3. 미들웨어
// 4. 라우팅
app.get("/", (req, resp)=>{
    resp.sendFile(path.join(__dirname, "index.html"));
});
// 5. 실행
app.listen(PORT, ()=> {
    console.log(`http://${HOST}:${PORT}`);
})