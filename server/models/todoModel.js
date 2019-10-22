/* eslint-disable linebreak-style */
class Todo {
  constructor() {
    this.id = null;
    this.title = '';
    this.todos = [];
  }

  addTodo({ id, title }) {
    this.todos.push({ id, title });
    return { id, title };
  }

  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  getTodos() {
    return this.todos;
  }

  updateTodo({ id, title }) {
    for (let index = 0; index < this.todos.length; index + 1) {
      if (this.todos[index].id === id) {
        this.todos[index].title = title;
        return this.todos[index];
      }
    }
    return false;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
export default Todo;
