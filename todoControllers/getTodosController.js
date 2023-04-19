const Todo = require('../models/todoModel');
const calculatePagesCount = require('../utils/calculatePagesCount');
const getFindArg = require('../utils/getFindArg');


exports.getTodos = async function (req, res) {
  try {
    const findArg = getFindArg.getFindArg(req.query.filterValue);

    const { skipCounter, pagesCount, todosTotalCount, activeTodosCount } =
      await calculatePagesCount.calculatePagesCount(
        req.query.filterValue,
        req.query.pageNumber
      );

    const someTodosCompleted = todosTotalCount - activeTodosCount > 0;
    const paginationData = {
      todosTotalCount,
      activeTodosCount,
      pagesCount,
      someTodosCompleted,
    };
    const todos = await Todo.find(findArg)
      .skip(skipCounter * 5)
      .limit(10)
      .sort({ user_id: -1 });
    res.json({
      todos,
      paginationData,
    });
  } catch (err) {
    console.log(err);
  }
};
