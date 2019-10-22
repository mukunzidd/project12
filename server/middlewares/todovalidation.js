import Joi from 'joi';

const todoValidator = (req, res, next) => {
  const schema = {
    title: Joi.string().min(10).max(100).required(),
    

  }
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).send({
      status: 400,
      error: `${result.error.details[0].message}`
    })
  };
  next();

};
export default todoValidator;