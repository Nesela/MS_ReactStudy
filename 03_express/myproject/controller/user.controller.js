const userService = require("../service/user.service");

const getUsers = async (req, resp) => {

    const users = await userService.getUsers();

}

const getUserById = async (req, resp) => {

    const user = await userService.getUserById(req.params.id);
    resp.json(user);

}

const getMe = async (req, resp) => {
    const user = await userService.getUserById(req.user.id);
    resp.json(user);
}

const createUser = async (req, resp) => {

    const { name, addr } = req.body;

    const result = await userService.createUser(name, addr);

    resp.status(201).json({ message: "사용자 추가 성공", id: result });

}

const updateUser = async (req, resp) => {

    const id = req.params.id;
    const { name, addr } = req.body;

    const result = await userService.updateUser(id, name, addr);

    resp.json({ message: "사용자 수정 성공", result: result });

}

const deleteUser = async (req, resp) => {

    const id = req.params.id;

    const result = await userService.deleteUser(id);

    resp.json({ message: "사용자 삭제 성공", result: result });

}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser,getMe };