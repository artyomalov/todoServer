
const todoRouter = require('express').Router();
const addTodoController = require('../todoControllers/addTodoController');
const getTodosController = require('../todoControllers/getTodosController');
const updateTodoController = require('../todoControllers/updateTodoController');
const completeAllTodosController = require('../todoControllers/completeAllTodosController');
const deleteTodoController = require('../todoControllers/deleteTodoController');
const deleteAllCompletedTodosController = require('../todoControllers/deleteAllCompletedTodosController');

// const express = require('express');
// const jsonParser = express.json();

todoRouter.post('/', addTodoController.addTodo);
todoRouter.get('/', getTodosController.getTodos);
todoRouter.patch('/:id', updateTodoController.updateTodo);
todoRouter.patch('/', completeAllTodosController.completeAllTodos)
todoRouter.delete('/:id', deleteTodoController.deleteTodo);
todoRouter.delete('/', deleteAllCompletedTodosController.deleteAllCompletedTodos);

module.exports = todoRouter;

 