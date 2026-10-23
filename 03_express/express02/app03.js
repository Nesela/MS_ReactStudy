// 1. 호출
const express = require("express");
// 2. 생성
const app = express();
const HOST = "localhost";
const PORT = 3000;
// 3. 미들웨어
app.use(express.json());
// 4. 라우팅
let users = [
    {id: 1, name: "hong-gd"},
    {id: 2, name: "kim-sd"},
    {id: 3, name: "lss=ss"},
];

app.get("/users", (req, resp)=>{
    resp.json(users);
});
app.get("/users/:id", (req, resp)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    if(!user) {
        return resp.status(404).json({message: "사용자를 찾을 수 없습니다."});
    }
    resp.json(user);
});
app.post("/users", (req, resp)=> {
    const {name} = req.body;
    const user = {id: users.length+1, name};
    users.push(user);
    resp.status(201).json({message: "사용자 추가 성공", data: user});
})

app.patch("/users/{:id}", (req,resp)=>{
    const id = parseInt(req.params.id);
    const user = users.find((user)=>user.id === id);
    if (!user) {
        return resp.status(404).json({message: "사용자를 찾을 수 없습니다."});
    }
    user.name = req.body.name;
    resp.json({message: "사용자 수정 성공", data: user});
});

app.delete("/users/{:id}", (req,resp)=>{
    const id = Number(req.params.id);
    const idx = users.findIndex((user)=>user.id === id);
    if (idx === -1) {
        return resp.status(404).json({message: "사용자를 찾을 수 없습니다."});
    }
    const deleteUser = users.splice(idx, 1);
    resp.json({message: "사용자 삭제 성공", data: deleteUser[0]});
});


// 5. 실행
app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});