// 1. 호출
const express = require("express");
// 2. 생성
const app = express();

const HOST = "localhost";
const PORT = "3000";

// 3. 미들 웨어

// 4. 라우팅
app.get("/search", (req, resp)=> {
    // localhost:3000/search?keyword=asdf
    const keyword = req.query.keyword;
    resp.json({keyword});
});

app.get("/search", (req, resp)=> {
    // localhost:3000/search?keyword=asdf&page=2%size=10
    const {keyword, page, size} = req.query;
    resp.json({keyword, page, size});
});

// 5. 서버실행
app.listen(PORT, ()=> {
    console.log(`http://${HOST}:${PORT}`);
})