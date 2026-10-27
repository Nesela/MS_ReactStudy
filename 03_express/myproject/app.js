// 1. 호출
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");
const userRouter = require("./route/user.route");
const boardRouter = require("./route/board.route");
const authRouter = require("./route/auth.route");

const errorMiddleware = require("./middleware/error.middleware");

// 2. 생성
const app = express();

const HOST = "localhost";
const PORT = 3000;
// 3. 미들웨어
app.use(cors());
app.use(express.json());

app.use(errorMiddleware);

// 4. 라우팅
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/boards", boardRouter);

// 5. 실행
const startServer = async()=> {
    await sequelize.authenticate();

    app.listen(PORT, ()=> {
        console.log(`http://${HOST}:${PORT}`);
    })
    
}

startServer();