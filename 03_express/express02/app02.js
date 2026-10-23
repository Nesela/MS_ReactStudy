// 1. 호출
const express = require("express");
// 2. 생성
const app = express();
const HOST = "127.0.0.1"
const PORT = 3000;
// 3. 미들웨어

// 4. 라우팅
const userRouter = express.Router();
app.use("/users", userRouter);

userRouter.get("/", (req, resp)=>{
    resp.json({message: "user 목록 전체 조회"});
});
userRouter.get("/{:id}", (req, resp)=>{
    resp.json({message: `${req.params.id} 의 user 정보 조회`});
});

const postRouter = express.Router();
app.use("/posts", postRouter);
postRouter.get("/", (req, resp)=>{
    resp.json({message: "게시글 목록 전체 조회"})
})
// 5. 실행
app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
})