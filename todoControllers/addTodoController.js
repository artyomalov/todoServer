const Todo = require('../models/todoModel');


exports.addTodo = async (req, res) => {
  const todoText = req.body.text;
  console.log(todoText);
  const addedTodo = await Todo.create({text: todoText});
  res.json(addedTodo);
  // res.status(200);
}