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
  try {
    const findArg = getFindArg(req.query.filterValue);

    const todosTotalCount = await Todo.countDocuments();
    const activeTodosCount = await Todo.countDocuments({ completed: false });
    
    
    const someTodosCompleted = todosTotalCount - activeTodosCount > 0;

    let requiredTodosCount = todosTotalCount;

    if (req.query.filterValue !== 'all') {
      requiredTodosCount =
        req.query.filterValue === 'active'
          ? (requiredTodosCount = activeTodosCount)
          : (requiredTodosCount = await Todo.countDocuments({
              completed: true,
            }));
    }

    const unfloredCount = requiredTodosCount / 5;

    const pagesCount =
      unfloredCount % 1 === 0 ? unfloredCount : Math.ceil(unfloredCount);

    let skipCounter = req.query.pageNumber - 1;

    if (req.query.pageNumber <= 1) {
      skipCounter = 0;
    }
    if (req.query.pageNumber > pagesCount) {
      skipCounter = pagesCount === 0 ? 0 : pagesCount - 1;
    }

    const todos = await Todo.find(findArg)
      .skip(skipCounter * 5)
      .limit(5);
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
