require("dotenv").config();

const jwt = require("jsonwebtoken");

const authMiddleware = (req, resp, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return resp.status(401).json({ error: "로그인이 필요합니다." });
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer" || !token) {
        return resp.status(401).json({ error: "잘못된 인증 방식 입니다." });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();

    } catch (err) {
        return resp.status(401).json({ error: "유효하지 않은 토큰입니다." });
    }
}

module.exports = authMiddleware;