// 1. 호출
const express = require("express");

// 2. 생성
const app = express();

const HOST = "127.0.0.1"
const PORT = 3000;

// 3. 미들 웨어

// 4. 라우팅
app.get("/users/:id", (req, resp) => {
    const userId = req.params.id;
    resp.json({ id: userId });
})

app.get("/users/{:userId}/posts/{:postId}", (req, resp)=> {
    const { userId, postId } = req.params;

    resp.json({ userId, postId })
});

// 5. 서버실행
app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});