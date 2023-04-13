const Todo = require('../models/todoModel');

exports.deleteAllCompletedTodos = async (_, res) => {
  const result = await Todo.deleteMany({completed: true});
  console.log(result);
  res.sendStatus(200);
}