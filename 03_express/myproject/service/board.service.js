const Board = require("../model/board.model");

const getBoard = async (page, size) => {
    // return await Board.findAll();

    const offset = (page - 1) * size;

    const result = await Board.findAndCountAll({
        limit: size,
        offset: offset,
        order: [["id", "DESC"]]
    });

    return {
        data: result.rows,
        pagination: {
            page: page,
            size: size,
            totalCount: result.count,
            totalPage: Math.ceil(result.count / size)
        }
    };
};

const getBoardById = async () => {
    const board = await Board.findByPk(id);

    if (!board) {
        const error = new Error("게시글을 찾을 수 없습니다.");
        error.status = 404;
        throw error;
    }

    return board;
}

const createBoard = async (title, content, user_id) => {
    const board = await Board.create({title, content, user_id});

    return board;
}

const updateBoard = async (id, title, content) => {
    const board = await Board.findByPk(id);

    if (!borad) {
        const error = new Error("게시글을 찾을 수 없습니다.");
        error.status = 404;
        throw error;
    }

    await board.update({title: title, content: content});

    return board;
}

const deleteBoard = async (id) => {
    const board = await Board.findByPk(id);

    if (!board) {
        const error = new Error("게시글을 찾을 수 없습니다.");
        error.status = 404;
        throw error;
    }

    await board.destroy();

    return board;
}

module.exports = {
    getBoard, getBoardById, createBoard, updateBoard, deleteBoard
};