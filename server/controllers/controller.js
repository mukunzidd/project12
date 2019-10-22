import todos from '../model/model';

const userClass = {
  getAllTodos(req, res) {
    return res.status(200).send({
      status: 'success',
      data: todos,
    });
  },
  getSpecificTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find((found) => found.id === id);
    if (todo) {
      return res.status(200).send({
        status: 'success',
        data: todo,
      });
    }
    return res.status(404).send({
      status: 'fail',
      message: 'There no todo with such id',
    });
  },
  addTodo(req, res) {
    const { title, completed } = req.body;
    const todoFound = todos.find((todo) => todo.title === title);
    if (todoFound) {
      return res.status(409).send({
        status: 'conflict',
        message: 'Todo with such title already exists',
      });
    }
    const newTodo = {
      id: todos.length + 1,
      title,
      completed,
    };
    todos.push(newTodo);
    return res.status(201).send({
      status: 'success',
      message: 'todo created successfully',
      data: newTodo,
    });
  },
  deleteTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find((found) => found.id === id);
    if (todo) {
      todos.splice(todos.indexOf(todo), 1);
      return res.status(200).send({
        status: 'success',
        message: 'Todo successfully deleted',
      });
    }
    return res.status(404).send({
      status: 'fail',
      data: 'There no todo with such id',
    });
  },
  modifyTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    const { title, completed } = req.body;
    const todo = todos.find((found) => found.id === id);
    if (todo) {
      todo.title = title;
      todo.completed = completed;
      return res.status(200).send({
        status: 'success',
        data: {
          message: 'todo successfully modified',
          todo,
        },
      });
    }
    return res.status(404).send({
      status: 'fail',
      data: 'There no todo with such id',
    });
  },
};
export default userClass;
