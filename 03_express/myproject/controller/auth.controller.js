const authService = require("../service/auth.service");

const register = async (req, resp) => {
    const {name, addr, password} = req.body;

    const result = await authService.register(name, addr, password);

    resp.status(201).json({message: "회원가입 성공", data:
        {
            id: result.id,
            name: result.name,
            addr: result.addr,
            role: result.role
        }
    });
}

const login = async (req, resp) => {
    const {name, password} = req.body;
    const result = await authService.login(name, password);
    resp.json({message: "로그인 성공", data: result});
}

module.exports = {register, login}