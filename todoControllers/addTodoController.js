const Todo = require('../models/todoModel');


exports.addTodo = async (req, res) => {
  try{
    const todoText = req.body.text;
    const returnedTodo = await Todo.create({text: todoText});
    if(!returnedTodo){
      res.status(404)
      throw new Error('Cant create new todo at data base');
    }
    const todosTotalCount = await Todo.countDocuments();

    res.json({returnedTodo, todosTotalCount});
  } catch(err){
    console.log(err);
  }
}
