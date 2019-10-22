import Joi from 'joi';

const validateTodo = (req, res, next) => {
  const todoSchema = {
    title: Joi.string().max(20).required(),
    list: Joi.string().max(100).required(),
  };
  const result = Joi.validate(req.body, todoSchema);
  if (result.error !== null) {
    res.status(400).send({
      status: 400,
      error: `${result.error.details[0].message}`,
    });
  }
  next();
};

export default validateTodo;
