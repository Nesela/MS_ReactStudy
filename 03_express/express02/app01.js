// 1. 호출
const express = require("express");

// 2. 생성
const app = express();
const HOST = "127.0.0.1";
const PORT = 3000;

// 3. 미들웨어

app.use((req, resp, next)=>{
    console.log(`[LOG] ${new Date().toLocaleString()}_${req.method}_${req.url}`);

    // next : 다음 middleware | router로 
    next();
})

const checkAuth = (req, resp, next)=>{
    // /admin?admin=true
    const isAuthenticated = req.query.admin === "true";
    if (isAuthenticated) {
        next();
    } else {
        resp.status(401).send("unauthorized");
    }
}

// 4. 라우팅
app.get("/", (req, resp)=>{
    resp.send("<h1>Welcome</h1>");
});
app.get("/admin", checkAuth, (req, resp)=>{
    resp.send("<h1>Admin Page</h1>");
});

// 5. 실행
app.listen(PORT, ()=>{
    console.log(`http://${HOST}:${PORT}`);
})