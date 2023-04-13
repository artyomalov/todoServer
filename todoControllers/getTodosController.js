const Todo = require('../models/todoModel');

const getFindArg = (filterValue) => {
  if (filterValue === 'completed') {
    return {completed: true}
  } 
  if (filterValue === 'active') {
    return {completed: false}
  }
  return {}
}

exports.getTodos = async function(req, res) {
    const findArg = getFindArg(req.query.filterValue)
    const allTodos = await Todo.find(findArg);
    res.send(allTodos);
}
