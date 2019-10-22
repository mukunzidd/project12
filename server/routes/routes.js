import express from 'express';
import userClass from '../controllers/controller';

const router = express.Router();
router.get('/api/v1/todos', userClass.getAllTodos);
router.get('/api/v1/todos/:id', userClass.getSpecificTodo);
router.post('/api/v1/todos', userClass.addTodo);
router.delete('/api/v1/todos/:id', userClass.deleteTodo);
router.patch('/api/v1/todos/:id', userClass.modifyTodo);
export default router;
