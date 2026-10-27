const boardService = require("../service/board.service");


const getBoard = async (req, resp) => {
    // const boardList = await boardService.getBoard();
    // resp.json(boardList);

    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 10;

    if (page < 1) {
        page = 1;
    }
    if (size < 1) {
        size = 10;
    }
    if (size > 100) {
        size = 100;
    }
    const result = await boardService.getBoard(page, size);
    resp.json(result);
}
/*
req.query.id  : /api/boards?id=1
req.params.id : /api/boards/1
*/
const getBoardById = async (req, resp) => {
    const id = req.params.id;
    const board = await boardService.getBoardById(id);
    resp.json(board);

}

const createBoard = async (req, resp) => {

    const { title, content, user_id } = req.body;
    const result = await boardService.createBoard(title, content, user_id);
    resp.status(201).json({ message: "게시글 추가 성공", data: result });
}

const updateBoard = async (req, resp) => {

    const id = req.params.id
    const { title, content } = req.body;
    const result = await boardService.updateBoard(id, title, content);
    resp.json({ message: "게시글 수정 성공", data: result });

}

const deleteBoard = async (req, resp) => {

    const id = req.params.id;
    const result = await boardService.deleteBoard(id);
    resp.json({ message: "게시글 삭제 성공", data: result });
}

module.exports = {
    getBoard,
    getBoardById,
    createBoard,
    updateBoard,
    deleteBoard
}