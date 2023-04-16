const Todo = require('../models/todoModel');

const getFindArg = (filterValue) => {
  if (filterValue === 'completed') {
    return { completed: true };
  }
  if (filterValue === 'active') {
    return { completed: false };
  }
  return {};
};

exports.getTodos = async function (req, res) {
  const findArg = getFindArg(req.query.filterValue);

  const todosTotalCount = await Todo.countDocuments();
  const activeTodosCount = await Todo.countDocuments({ completed: false });
  const unfloredCount = todosTotalCount / 5;
  const pagesCount =
    unfloredCount % 1 === 0 ? unfloredCount : Math.ceil(unfloredCount);
  const filteredTodos = await Todo.find(findArg).skip(
    (req.query.pageNumber - 1) * 5
  );
  res.json({ filteredTodos, todosTotalCount, activeTodosCount, pagesCount });
};
