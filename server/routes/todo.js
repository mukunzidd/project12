import express from 'express';
// eslint-disable-next-line import/named
import TodosControlller from '../controllers/todoController';
import todoValidator from '../middlewares/todovalidation';

const router = express.Router();

router.post('/todos', todoValidator, TodosControlller.createTodo);

export default router;
