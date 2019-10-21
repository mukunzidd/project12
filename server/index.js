import express from 'express';

const app = express();

app.get('/status', (req, res) => {
  res.send({ status: 'Active' });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up');
});
