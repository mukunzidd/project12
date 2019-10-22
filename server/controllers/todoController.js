/* eslint-disable linebreak-style */
import Todo from '../models/todoModel';

const todo = new Todo();
class TodosControlller {
  static createTodo(req, res) {
    const { title } = req.body;
    console.log(` title: ${JSON.stringify(req.body)}`);
    const id = parseInt(Math.random() * 1000);
    const newTodo = todo.addTodo({ id, title });
    return res.status(201).send({ status: 200, message: 'todo created successfully', data: newTodo });
  }

  static getTodos(req, res) {
    const todos = todo.getTodos();
    res.status(200).json({
      status: res.statusCode,
      data: todos,
    });
  }

  static getTodo(req, res) {
    const todoId = req.params.id;
    const retrievedTodo = todo.getTodo(todoId);
    if (retrievedTodo) {
      res.status(200).json({
        status: res.statusCode,
        data: retrievedTodo,
      });
    }
    res.status(404).json({
      status: res.statusCode,
      error: 'todo not found!',
    });
  }

  static updateTodo(req, res) {
    const { id, title } = req.body;
    const modifiedTodo = todo.updateTodo({ id, title });
    if (modifiedTodo) {
      res.status(200).json({
        status: res.statusCode,
        message: 'todo modified with success!',
        data: modifiedTodo,
      });
    }
    res.status(404).json({
      status: res.statusCode,
      error: 'something went wrong, do try again',
    });
  }

  static deleteTodo(req, res) {
    const { id } = req.params;
  }
}
export default TodosControlller;
