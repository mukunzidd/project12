import express from 'express';
import bodyParse from 'body-parser';
import todoRouter from './routes/todoRoute';

const app = express();

app.use(bodyParse.json());

app.get('/status', (req, res) => {
  res.send({
    status: 'Active',
  });
});

app.use('/add', todoRouter);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up');
});

export default app;
