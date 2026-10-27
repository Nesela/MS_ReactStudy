const adminMiddleware = (req, resp, next) => {
    if (!req.user) {
        return resp.status(401).json({error: "로그인이 필요합니다."});
    }
    if (req.user.role !== "admin") {
        return resp.status(403).json({error: "관리자 권한이 필요합니다."});
    }

    next();
}

/*
401 : 인증
403 : 인가
*/

module.exports = adminMiddleware;