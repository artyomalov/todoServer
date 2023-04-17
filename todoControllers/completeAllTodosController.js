const Todo = require('../models/todoModel');

exports.completeAllTodos = async (req, res) => {
  try {
    const result = await Todo.updateMany(
      { completed: false },
      { completed: true }
    );
    if (result.matchedCount === 0) {
      const result = await Todo.updateMany(
        { completed: true },
        { completed: false }
      );
      const activeTodosCount = await Todo.countDocuments({ completed: false });
      res.json({ completed: false, activeTodosCount });
      return;
    }
    const activeTodosCount = await Todo.countDocuments({ completed: false });
    res.json({ completed: true, activeTodosCount });
  } catch (err) {
    console.log(err);
  }
};
