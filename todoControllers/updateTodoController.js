const Todo = require('../models/todoModel');

exports.updateTodo = async (req, res) => {
  try {
    const updatingTodoId = req.params.id;
    const updatingTodoProp = req.body.prop;
    const updatingTodoValue =
      req.body.prop === 'completed' ? !req.body.value : req.body.value;

    const returnedTodo = await Todo.findByIdAndUpdate(
      updatingTodoId,
      { [updatingTodoProp]: updatingTodoValue },
      { new: true }
    );
    const activeTodosCount = await Todo.countDocuments({completed: false});
    if (!returnedTodo) {
      res.sendStatus(404);
      throw new Error('Cant connect to the data base');
    }
    res.json({returnedTodo, activeTodosCount});
  } catch (err) {
    console.log(err);
  }
};
