const errorMiddleware = (err, req, resp, next) => {
    console.error(err);

    const status = err.status || 500;
    resp.status(status).json({error: err.message || "서버 오류가 발생했습니다."});
}

module.exports = errorMiddleware;