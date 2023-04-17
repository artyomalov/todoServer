const Todo = require('../models/todoModel');

exports.deleteAllCompletedTodos = async (_, res) => {

  try {
  const result = await Todo.deleteMany({ completed: true });
  if(!result) {
    throw new Error('Cant\'t connet to the data base');
  }
  const todosTotalCount = await Todo.countDocuments();
  const activeTodosCount = await Todo.countDocuments({ completed: true });
  res.json({
    todosTotalCount,
    activeTodosCount,
  })} catch(err) {
    console.log(err)
  }
};
