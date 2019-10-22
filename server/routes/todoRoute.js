import express from 'express';
import validateTodo from '../middleware/validateTodo';
import TodoController from '../controllers/todoController';

const todoRouter = express.Router();

todoRouter.post('/todo', validateTodo, TodoController.addTodo);

export default todoRouter;
