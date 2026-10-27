require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/user.model");

const register = async (name, addr, password) => {
    const existsUser = await User.findOne({ where: { name: name } });
    if (existsUser) {
        const error = new Error("이미 존재하는 사용자 입니다.");
        error.status = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name: name,
        addr: addr,
        password: hashedPassword,
        role: 'user'
    });
    return user;
}

const login = async (name, password) => {
    const user = await User.findOne({ where: { name: name } });
    if (!user) {
        const error = new Error("이름 또는 비밀번호가 올바르지 않습니다.");
        error.status = 401;
        throw error;
    }
    const isPwMatched = await bcrypt.compare(password, user.password);
    if (!isPwMatched) {
        const error = new Error("이름 또는 비밀번호가 올바르지 않습니다.");
        error.status = 401;
        throw error;
    }

    const token = jwt.sign(
        {
            id: user.id,
            name: user.name,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || "1h"

        }
    );

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            addr: user.addr,
            role: user.role
        }
    }
}

module.exports = {register, login}