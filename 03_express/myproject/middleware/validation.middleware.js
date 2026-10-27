
// next : 다음 middleware | router
const validateUser = (req, resp, next) => {
    const { name, addr } = req.body;

    if (!name || name.trim() === "") {
        return resp.status(400).json({error: "이름을 입력해 주세요."});
    }
    if (!addr || addr.trim() === "") {
        return resp.status(400).json({error: "주소를 입력해 주세요."});
    }
    next();
};

const validateBoard = (req, resp, next) => {
    const {title, content, user_id} = req.body;

    if (!title || title.trim() === "") {
        return resp.status(400).json({error: "제목을 입력해 주세요."});
    }
    if (!content || content.trim() === "") {
        return resp.status(400).json({error: "내용을 입력해 주세요."});
    }
    if (req.method === "POST" && !user_id) {
        return resp.status(400).json({error: "작성자를 입력해 주세요."});
    }

    next();
}

const validateRegister = (req, resp, next) => {
    const {name, addr, password} = req.body;

    if (!name || name.trim() === "") {
        return resp.status(400).json({error: "이름을 입력해 주세요."});
    }
    if (!addr || addr.trim() === "") {
        return resp.status(400).json({error: "주소를 입력해 주세요."});
    }
    if (!password || password.trim() === "") {
        return resp.status(400).json({error: "비밀번호를 입력해 주세요."});
    }
    if (password.length < 4) {
        return resp.status(400).json({error: "비밀번호의 길이는 4글자 이상으로 입력해 주세요."});
    }

    next();
}

const validateLogin = (req, resp, next) => {
    const {name, password} = req.body;

     if (!name || name.trim() === "") {
        return resp.status(400).json({error: "이름을 입력해 주세요."});
    }
    if (!password || password.trim() === "") {
        return resp.status(400).json({error: "비밀번호를 입력해 주세요."});
    }

    next();
}

module.exports = {validateUser, validateBoard, validateRegister, validateLogin};