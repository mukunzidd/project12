import Todo from '../model/todo';

export const todoList = [];

class TodoController {
  static addTodo(req, res) {
    const id = todoList.length + 1;
    const {
      title,
      list,
    } = req.body;

    const newTodo = new Todo(id, title, list);
    todoList.push(newTodo);

    return res.status(200).send({ status: 200, message: 'todo list created', data: newTodo });
  }
}

export default TodoController;
