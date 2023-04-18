const Todo = require('../models/todoModel');
const calculatePagesCount = require('../utils/calculatePagesCount');

exports.addTodo = async (req, res) => {
  try {
    const todoText = req.body.data;
    const returnedTodo = await Todo.create({
      user_id: Number(Date.now()),
      text: todoText,
    });
    if (!returnedTodo) {
      res.status(404);
      throw new Error('Cant create new todo at data base');
    }

    const { pagesCount, activeTodosCount, todosTotalCount } = await calculatePagesCount.calculatePagesCount(
      req.query.filterValue,
      req.query.pageNumber
    );

    const paginationData = { activeTodosCount, pagesCount, todosTotalCount };
    res.json({ returnedTodo, paginationData });
  } catch (err) {
    console.log(err);
  }
};
