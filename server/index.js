import express from 'express';
import bodyParse from 'body-parser';
import todoRoute from './routes/todo';

const app = express();

app.use(bodyParse.json());

app.use('/api/v1', todoRoute);

app.get('/status', (req, res) => {
  res.send({ status: 'Active' });
});


app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up');
});
