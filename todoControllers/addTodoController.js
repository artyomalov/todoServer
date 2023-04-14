const Todo = require('../models/todoModel');


exports.addTodo = async (req, res) => {
  try{
    const todoText = req.body.text;
    const addedTodo = await Todo.create({text: todoText});
    if(!addedTodo){
      res.status(404)
      throw new Error('Cant create new todo at data base');
    }
    res.json(addedTodo);
  } catch(err){
    console.log(err);
  }
}