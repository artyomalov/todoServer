const Todo = require('../models/todoModel');
const calculatePagesCount = require('../utils/calculatePagesCount');

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
  try {
    const findArg = getFindArg(req.query.filterValue);
    
    
    const { skipCounter, pagesCount, todosTotalCount, activeTodosCount } =
    await calculatePagesCount.calculatePagesCount(
      req.query.filterValue,
      req.query.pageNumber
      );

    const someTodosCompleted = todosTotalCount - activeTodosCount > 0;
    const todos = await Todo.find(findArg)
      .skip(skipCounter * 5)
      .limit(10)
      .sort({ user_id: -1 });
    res.json({
      todos,
      todosTotalCount,
      activeTodosCount,
      pagesCount,
      someTodosCompleted,
    });
  } catch (err) {
    console.log(err);
  }
};
