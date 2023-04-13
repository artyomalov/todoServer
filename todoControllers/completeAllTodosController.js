const Todo = require('../models/todoModel');

exports.completeAllTodos = async (req, res) => {
  const result = await Todo.updateMany(
    {completed: false}, {completed:true}
  );
  if(result.matchedCount===0) {
    const result = await Todo.updateMany(
      {completed: true}, {completed: false}
      )
  }
}