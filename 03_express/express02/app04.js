// 1. 호출
const express = require("express");
const cors = require("cors");
// 2. 생성
const app = express();
const HOST = "localhost";
const PORT = 3000;
// 3. 미들웨어
app.use(express.json());
app.use(cors());
// 4. 라우터
app.get("/api/data", (req, resp)=>{
    resp.json({message: `${HOST}:${PORT}에서 응답된 data`});
});
// 5. 실행
app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});