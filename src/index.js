import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const store = createStore();

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
