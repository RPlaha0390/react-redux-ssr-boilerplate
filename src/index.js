import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const store = createStore();

app.use(express.static('public'));
app.get('*', (req, res) => {

	matchRoutes(Routes, req.path).map(({ route }) => {
		/**
		 * Check to see if loadData function exists in route
		 */
		return route.loadData ? route.loadData() : null;
	});

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
