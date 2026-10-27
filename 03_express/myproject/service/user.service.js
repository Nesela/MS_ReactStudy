const User = require("../model/user.model");

const getUsers = async () => {
    return await User.findAll({attributes: ["id", "name", "addr", "role"]});
        
}

const getUserById = async (id) => {
    const user = await User.findByPk(id, {attributes: ["id", "name", "addr", "role"]});

    if (!user){
        const error = new Error("사용자를 찾을 수 없습니다.");
        error.satus = 404;
        throw error;
    }
    
    return user;
}

const createUser = async (name, addr) => {
    const user = await User.create({name: name, addr: addr});
    
    return user;
}

const updateUser = async (id, name, addr) => {
    const user = await User.findByPk(id);

    if(!user) {
        const error = new Error("사용자를 찾을 수 없습니다.");
        error.satus = 404;
        throw error;
    }

    await user.update({name: name, addr: addr});

    return user;
}

const deleteUser = async (id) => {
    const user = await User.findByPk(id);

    if(!user) {
        const error = new Error("사용자를 찾을 수 없습니다.");
        error.satus = 404;
        throw error;
    }

    await user.destroy();
    
    return user;
}

module.exports = {getUsers, getUserById, createUser, updateUser, deleteUser};