import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();
app.use(bodyParser.json());
app.get('/status', (req, res) => {
  res.send({ status: 'Active' });
});
app.use(routes);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up');
});
