import express from 'express';
import todos from './models/Todo.js';

const app = express();

app.get('/status', (req, res) => {
  res.send({ status: 'Active' });
});

app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    status: 'Success',
    data: todos,
  });
});

app.get('/api/v1/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(found => found.id === id);
  if (todo) {
    res.status(200).send({
      status: 'Success',
      data: todo,
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up');
});
