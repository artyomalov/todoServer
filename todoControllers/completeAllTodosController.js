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
      res.json(false);
      return;
    }
    res.json(true);
  } catch (err) {
    console.log(err);
  }
};
