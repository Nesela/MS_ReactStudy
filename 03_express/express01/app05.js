// 1. 호출
const express = require("express");
// 2. 생성
const app = express()

const HOST = "127.0.0.1"
const PORT = "3000"
// 3. 미들웨워

// 4. 라우팅
const posts = [
    {id: 1, title: "첫번째 글", content: "안녕하세요! 연습중입니다."},
    {id: 2, title: "두번째 글", content: "express.js 로 server 구축을 연습합니다."},
    {id: 3, title: "세번째 글", content: "back-edn 개발자 취업 준비중입니다."},
];

app.get("/api/posts", (req, resp)=> {
    resp.json(posts);
});

app.get("/api/posts/{:id}", (req,resp)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((p)=>p.id === id);

    if (post) {
        resp.json(post);
    } else {
        resp.status(404).json({message: "해ㅔ당 글이 존재하지 않습니다."});
    }
})

// 5. 실행
app.listen(PORT, ()=> {
    console.log(`http://${HOST}:${PORT}`);
})