const Todo = require('../models/todoModel');

exports.deleteTodo = async (req, res) => {
  try{
    const deletingTodoId = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(deletingTodoId);
    if(!deletedTodo) {
        res.sendStatus(404);
        throw new Error('No such todo');
      }
    res.json(deletedTodo);
  } catch(e) {console.log(e)}
}