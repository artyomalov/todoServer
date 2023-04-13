const Todo = require('../models/todoModel');


exports.addTodo = async (req, res) => {
  const todoText = req.body.text;
  const addedTodo = await Todo.create({text: todoText});

  res.status(200);
  res.json(addedTodo);
}