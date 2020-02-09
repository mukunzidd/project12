/* eslint-disable linebreak-style */
import express from 'express';
// eslint-disable-next-line import/named
import TodosControlller from '../controllers/todoController';

const router = express.Router();

router.post('/todos', TodosControlller.createTodo);
router.get('/todos', TodosControlller.getTodos);
router.get('/todos/:id', TodosControlller.getTodo);
router.patch('/todos/:id', TodosControlller.updateTodo);
router.delete('/todos/:id', TodosControlller.deleteTodo);
export default router;
