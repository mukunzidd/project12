import uuid from 'uuid';
import moment from 'moment';
import todos from '../models/Todo';

const todo={
    create(req,res) {
        const {title} = req.body;
        if (!title) {
            return res.status(400).send({ message: 'All fields are required' });
        }
        
            const newTodo ={
                id: uuid.v1(),
                title,
                createDate: moment().format('LLLL'),
                complete: false  
            };
            todos.push(newTodo);
            return res.status(200).send({
                status: 200,
                message:'todo Created successfully',
                data: newTodo
            });
    },

    getAll(req,res) {
        return res.status(200).send({
            status: 200,
            message:'successfully fetched all todo',
            data: todos
        });
    },

    getOne(req,res) {
        const {id} = req.params;
        const Found = todos.find(found => found.id === id);
        if (Found) {
          return res.status(200).send({
            status: '200',
            message: 'Todo Found',
            data: Found,
          });
        }
        
            return res.status(404).send({
                status: '404',
                message: 'Todo not Found'
              });
    },
    delete(req,res) {
        const {id} = req.params;
        const Found = todos.find(found => found.id === id);
        if (!Found) {
            return res.status(404).json({
              status: 404,
              message: 'entry not found'
            });
          }
          const index = todos.indexOf(Found);
          todos.splice(index, 1);
          return res.status(200).json({
            status: 200,
            message: 'entry delete is successfully'
          });
    },

    update(req,res) {
        const {title} = req.body;
        const {id} = req.params;
    const Found = todos.find(found => found.id === id);
    if (!Found) {
        return res.status(404).json({
          status: 404,
          message: 'Todo not Found'
        });
      }
        const index = todos.indexOf(Found);
        todos[index].title = title || Found.title;
        return res.status(200).json({
            status: 200,
            message: 'todo update is successfully',
            data: [todos[index]]
          });
    }
};

export default todo;
