const Todo = require('../models/todoModel');
const calculatePagesCount = require('../utils/calculatePagesCount');

exports.deleteTodo = async (req, res) => {
  try {
    const deletingTodoId = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(deletingTodoId);

    if (!deletedTodo) {
      res.sendStatus(404);
      throw new Error('Data base error! No corresponding todo');
    }

    const { pagesCount, activeTodosCount, todosTotalCount } =
      await calculatePagesCount.calculatePagesCount('all', 1);

    res.json( { pagesCount, activeTodosCount, todosTotalCount });
  } catch (err) {
    console.log(err);
  }
};
