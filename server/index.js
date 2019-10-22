import express from 'express';
import todos from './controllers/Todo';

const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.post('/api/v1/todo', todos.create);
app.get('/api/v1/todo', todos.getAll);
app.get('/api/v1/todo/:id', todos.getOne);
app.put('/api/v1/todo/:id', todos.update);
app.delete('/api/v1/todo/:id', todos.delete);
app.listen(2020);
