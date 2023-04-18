const Todo = require('../models/todoModel');

exports.calculatePagesCount = async (filterValue, pageNumber) => {
  const todosTotalCount = await Todo.countDocuments();
  const activeTodosCount = await Todo.countDocuments({ completed: false });

  let requiredTodosCount = await Todo.countDocuments();

  if (filterValue !== 'all') {
    todosCount =
      filterValue === 'active'
        ? (todosCount = activeTodosCount)
        : (todosCount = await Todo.countDocuments({
            completed: true,
          }));
  }

  const unruondeedCount = requiredTodosCount / 5;

  const pagesCount =
    unruondeedCount % 1 === 0 ? unruondeedCount : Math.ceil(unruondeedCount);
  if (pageNumber <= 1) {
    const skipCounter = 0;
    return { skipCounter, pagesCount, todosTotalCount, activeTodosCount };
  }
  if (pageNumber > pagesCount) {
    const skipCounter = pagesCount === 0 ? 0 : pagesCount - 1;
    return { skipCounter, pagesCount, todosTotalCount, activeTodosCount };
  }
  const skipCounter = pageNumber - 1;
  return { skipCounter, pagesCount, todosTotalCount, activeTodosCount };
};
