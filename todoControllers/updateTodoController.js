const Todo = require('../models/todoModel');

exports.updateTodo = async (req, res) => {
  const updatingTodoId = req.params.id;
  const updatingTodoProp = req.body.prop;
  const updatingTodoValue = req.body.value;
  
  console.log(updatingTodoId);
  console.log(updatingTodoProp);
  console.log(updatingTodoValue);

  const updatedTodo = await Todo.findByIdAndUpdate(updatingTodoId, {[updatingTodoProp]: updatingTodoValue}, {new: true})
  console.log(updatedTodo);
  if(!updatedTodo) {
    res.sendStatus(404);
  }
  res.json(updatedTodo);
}