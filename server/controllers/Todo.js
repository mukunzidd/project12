import uuid from 'uuid';
import moment from 'moment';
import todos from '../models/Todo';

const Todo = {
    create(req,res) {
        const {title}= req.body;
        if (!title) {
            return res.status(400).send({ message: 'All fields are required' });
        } 
        
            const newTodo={
                id: uuid.v4(),
                title,
                createDate: moment.now(),
                completed: false
            };
            todos.push(newTodo);
            return res.status(200).send({
                status: '200',
                message: "new todo create sucessful",
                data: todos,
              });
    },
    getOne(req,res) {
        const {id} = req.params;
        const Found = todos.find(found => found.id === id);
        if (!Found) {
            res.status(200).send({
                status: '200',
                message: "Todo Found",
                data: Found
              });
        }
        else {
            res.status(404).send({
                status: '404',
                message: "todo not found"
              });
        }
    },
    delete(req,res) {
        const {id} = req.params;
        const Found = todos.find(found => found.id === id);
        const index = todos.indexOf(Found);
        if (!Found) {
            res.status(200).send({
                status: '200',
                message: "Todo Found",
                data: Found
              });
        }
        todos.splice(index, 1);
        res.status(200).send({
            status: '200',
            message: "delete sucessful"
          });
    },

  getAll(req, res) {
    res.status(200).send({
      status: 'Success',
      data: todos,
    });
  },
};

export default Todo;
