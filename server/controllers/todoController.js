import bodyParse from 'body-parser';
import Todo from '../models/todoModel';

export const todos = [];

class TodosControlller {
  static createTodo(req, res) {
    const { title } = req.body;
    const todoId = todos.length + 1;
    const newTodo = new Todo(todoId, title, req);
    todos.push(newTodo);
    console.log(newTodo)

    return res.status(200).send({ status: 200, message: 'todo created successly', data: newTodo });


  }
}
export default TodosControlller;