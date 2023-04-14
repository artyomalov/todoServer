const Todo = require('../models/todoModel');

exports.deleteAllCompletedTodos = async (_, res) => {
  const result = await Todo.deleteMany({completed: true});
  res.sendStatus(200);
}